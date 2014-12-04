var React = require('react');

var Search = React.createClass({
    render: function () {
        return (
            <div className="search">
                <input className="search__input" type="text" />
                <button className="search__button">Найти</button>
            </div>
        );
    }
});

module.exports = Search;
