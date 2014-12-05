var React = require('react');
var WeatherDays = require('./weather_days');

var WeatherBrief = React.createClass({
    render: function () {
        return (<WeatherDays isBrief={true} {...this.props} />);
    }
});

module.exports = WeatherBrief;
