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
            <div className={this.props.className}
                style={{"background-image": "url(http://ekb.shri14.ru/icons/" + this.props.icon + ".svg)"}} />
        );
    }
});

module.exports = WeatherIcon;
