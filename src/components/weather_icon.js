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
                style={{backgroundImage: "url(/icons/" + this.props.icon + ".svg)"}} />
        );
    }
});

module.exports = WeatherIcon;
