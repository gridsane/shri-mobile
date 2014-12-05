var React = require('react/addons');
var WeatherIcon = require('./weather_icon');
var WeatherIndicators = require('./weather_indicators');
var WeatherPart = require('./weather_part');
var dateutils = require('../utils/date');
var temp2color = require('../utils/temp2color');

var Day = React.createClass({
    getDefaultProps: function () {
        return {
            fact: null,
            forecast: {},
            isBrief: true
        };
    },

    render: function () {
        var titleClasses = React.addons.classSet({
            "weather-day__title": true,
            "weather-day__title-today": !!this.props.fact,
        });

        var fact = null;
        var isToday = !!this.props.fact;
        if (isToday) {
            fact = (
                <div className="weather-day__fact" style={{backgroundColor: temp2color(this.props.fact.temp)}}>
                    <div className="weather-day__fact-temp">
                        {this.props.fact.temp}&deg;C
                    </div>

                    {this.props.isBrief ? <WeatherIndicators
                        showWindDir={false}
                        {...this.props.fact}/> : null}

                    <WeatherIcon className="weather-day__fact-icon" icon={this.props.fact.weather_icon} />
                    <div className="weather-day__fact-weather">
                        <div className="weather-day__fact-desc">
                            {this.props.fact.weather}
                        </div>
                        {this.props.isBrief
                            ? null
                            : <WeatherIndicators
                                showWindDir={true}
                                sunrise={this.props.forecast.sunrise}
                                sunset={this.props.forecast.sunset}
                                {...this.props.fact}/>}
                    </div>

                </div>
            );
        }

        var nowPart = dateutils.getNowPart();
        var parts = this.props.forecast.parts.map(function (part, i) {
            if (isToday && dateutils.isPartLessThen(part.type, nowPart)) {
                return;
            }

            return (<WeatherPart key={i} isBrief={this.props.isBrief} {...part} />);
        }.bind(this));

        return (
            <div className="weather-day__day">
                <div className={titleClasses}>
                    {dateutils.getTitle(new Date(this.props.forecast.date))}
                </div>
                {fact}
                <ul className="weather-day__parts">
                    {parts}
                </ul>
            </div>
        );
    }
});

var WeatherDays = React.createClass({
    render: function () {
        var days = this.props.forecast.map(function (forecast, i) {
            var date = new Date(forecast.date);
            var props = {forecast: forecast, isBrief: this.props.isBrief};

            if (date < dateutils.getToday()) {
                return null;
            }

            if (dateutils.isToday(new Date(forecast.date))) {
                props.fact = this.props.fact;
            }

            return (<Day key={i} {...props} />);
        }.bind(this));

        return (
            <div className="weather-day">
                {days}
            </div>
        );
    }
});

module.exports = WeatherDays;
