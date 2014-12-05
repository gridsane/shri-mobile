var React = require('react');
var WeatherDays = require('./weather_days');

var WeatherDetail = React.createClass({
    render: function () {
        return (<WeatherDays isBrief={false} {...this.props} />);
    }
});

module.exports = WeatherDetail;
