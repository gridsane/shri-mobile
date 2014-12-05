var React = require('react');
var WeatherIcon = require('./weather_icon');
var WeatherIndicators = require('./weather_indicators');
var dateutils = require('../utils/date');
var temp2color = require('../utils/temp2color');

var WeatherPart = React.createClass({
    getDefaultProps: function () {
        return {
            isBrief: true
        };
    },

    renderDetails: function () {
        return (
            <div className="weather-day__part-details">
                <div className="weather-day__part-weather">
                    {this.props.weather}
                </div>
                <WeatherIndicators showWindDir={true} {...this.props} />
            </div>
        );
    },

    render: function () {
        if (-1 === ['night', 'morning', 'day', 'evening'].indexOf(this.props.type)) {
            return null;
        }

        var temp = this.props.temp_min || this.props.temp;

        return (
            <li className="weather-day__part" style={{backgroundColor: temp2color(temp)}}>
                <div className="weather-day__part-type">
                    {dateutils.getPartTranslation(this.props.type)}
                </div>
                <WeatherIcon className="weather-day__part-icon" icon={this.props.weather_icon} />
                <div className="weather-day__part-temp-min">
                    {temp}
                </div>
                <div className="weather-day__part-temp-max">
                    {this.props.temp_max || null}
                </div>
                {this.props.isBrief ? null : this.renderDetails()}
            </li>
        );
    }
});

module.exports = WeatherPart;
