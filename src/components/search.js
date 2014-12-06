var React = require('react/addons');
var superagent = require('superagent');

var Dropdown = React.createClass({
    getDefaultProps: function () {
        return {
            timeout: 100,
            onSelect: null
        };
    },

    getInitialState: function () {
        return {
            options: [],
            queryTimeout: null
        }
    },

    updateOptions: function () {
        superagent
            .get('http://ekb.shri14.ru/api/suggest?query=' + this.props.query)
            .end(function (res) {
                this.setState({options: res.body});
            }.bind(this));
    },

    onSelect: function (option, event) {
        if ("function" === typeof(this.props.onSelect)) {
            this.props.onSelect(option);
        }
    },

    hasOptions: function () {
        return this.state.options.length > 0;
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (this.props.query !== prevProps.query) {
            if (this.state.queryTimeout) {
                clearTimeout(this.state.queryTimeout);
                this.setState({options: []});
            }

            this.setState({
                queryTimeout: setTimeout(this.updateOptions, this.props.timeout)
            });
        }
    },

    render: function () {
        var classes = React.addons.classSet({
            "search__dropdown": true,
            "search__dropdown-visible": this.props.isVisible
        });

        var options = this.state.options.map(function (option) {
            return (
                <li key={option.geoid} onClick={this.onSelect.bind(this, option)} className="search__dropdown-item">
                    {option.name}
                </li>
            );
        }.bind(this));

        return (
            <ul className={classes}>{options}</ul>
        );
    }
});

var Search = React.createClass({
    getInitialState: function () {
        return {
            value: '',
            query: '',
            isDropdownVisible: false
        };
    },

    onInputChange: function (event) {
        this.setState({query: this.refs.input.getDOMNode().value});
    },

    onInputFocus: function () {
        this.setState({isDropdownVisible: true});
    },

    onInputBlur: function (force, event) {
        if (!this.refs.dropdown.hasOptions() || force) {
            this.setState({isDropdownVisible: false});
        }
    },

    onSearchClick: function () {
        this.onInputFocus();
        this.onInputChange();
    },

    onSelect: function (option) {
        this.onInputBlur(true);
        // через стейт или properties
        this.refs.input.getDOMNode().value = option.name;
        this.props.onSelect(option);
    },

    render: function () {
        var cancelClasses = React.addons.classSet({
            "search__cancel": true,
            "search__cancel-visible": this.state.isDropdownVisible
        });

        return (
            <div className="search">
                <input ref="input" className="search__input" type="text"
                    onChange={this.onInputChange}
                    onBlur={this.onInputBlur.bind(this, false)}
                    onFocus={this.onInputFocus}/>
                <a onClick={this.onInputBlur.bind(this, true)} className={cancelClasses}></a>
                <button onClick={this.onSearchClick} className="search__button">Найти</button>
                <Dropdown ref="dropdown" onSelect={this.onSelect} query={this.state.query} isVisible={this.state.isDropdownVisible} />
            </div>
        );
    }
});

module.exports = Search;
