var React = require('react');

var WeatherIcon = React.createClass({
    getDefaultProps: function () {
        return {
            icon: 'bkn_d',
            className: 'weather-icon'
        }
    },

    render: function () {
        return (
            <img
                src={"http://ekb.shri14.ru/icons/" + this.props.icon + ".svg"}
                className={this.props.className}/>
        );
    }
});

module.exports = WeatherIcon;
