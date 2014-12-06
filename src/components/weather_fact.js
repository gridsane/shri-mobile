var React = require('react/addons');
var WeatherIcon = require('./weather_icon');
var WeatherIndicators = require('./weather_indicators');
var temp2color = require('../utils/temp2color');

var WeatherFact = React.createClass({
    getDefaultProps: function () {
        return {
            fact: null,
            forecast: {},
            fillBackground: true,
            showBriefIndicators: true,
            showDetailIndicators: false
        };
    },

    renderBriefIndicators: function () {
        return <WeatherIndicators showWindDir={false} {...this.props.fact}/>;
    },

    renderDetailIndicators: function () {
        return <WeatherIndicators
                    showWindDir={true}
                    sunrise={this.props.forecast.sunrise}
                    sunset={this.props.forecast.sunset}
                    {...this.props.fact}/>;
    },

    render: function () {
        var style = this.props.fillBackground
            ? {backgroundColor: temp2color(this.props.fact.temp)}
            : null;

        return (
            <div className="weather-day__fact" style={style}>
                <div className="weather-day__fact-temp">
                    {this.props.fact.temp}&deg;C
                </div>

                {this.props.showBriefIndicators
                        ? this.renderBriefIndicators()
                        : null}

                <WeatherIcon className="weather-day__fact-icon" icon={this.props.fact.weather_icon} />
                <div className="weather-day__fact-weather">
                    <div className="weather-day__fact-desc">
                        {this.props.fact.weather}
                    </div>
                    {this.props.showDetailIndicators
                        ? this.renderDetailIndicators()
                        : null}
                </div>

            </div>
        );
    }
});

module.exports = WeatherFact;
