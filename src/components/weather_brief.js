var React = require('react/addons');
var WeatherIcon = require('./weather_icon');
var dateutils = require('../utils/date');
var temp2color = require('../utils/temp2color');

var WeatherBriefDay = React.createClass({
    getDefaultProps: function () {
        return {
            fact: null,
            forecast: {}
        };
    },

    render: function () {
        var titleClasses = React.addons.classSet({
            "weather-brief__title": true,
            "weather-brief__title-today": !!this.props.fact,
        });

        var fact = null;
        var isToday = !!this.props.fact;
        if (isToday) {
            fact = (
                <div className="weather-brief__fact" style={{backgroundColor: temp2color(this.props.fact.temp)}}>
                    <div className="weather-brief__fact-temp">
                        {this.props.fact.temp}&deg;C
                    </div>
                    <dl className="weather-brief__fact-indicators">
                        <dt className="weather-brief__fact-indicators-name">
                            Ветер
                        </dt>
                        <dd className="weather-brief__fact-indicators-value">
                            {this.props.fact.wind_speed} м/с
                        </dd>

                        <dt className="weather-brief__fact-indicators-name">
                            Влажность
                        </dt>
                        <dd className="weather-brief__fact-indicators-value">
                            {this.props.fact.humidity}%
                        </dd>

                        <dt className="weather-brief__fact-indicators-name">
                            Давление
                        </dt>
                        <dd className="weather-brief__fact-indicators-value">
                            {this.props.fact.pressure} мм рт. ст.
                        </dd>
                    </dl>
                    <div className="weather-brief__fact-weather">
                        <WeatherIcon className="weather-brief__fact-icon" icon={this.props.fact.weather_icon} />
                        <div className="weather-brief__fact-desc">
                            {this.props.fact.weather}
                        </div>
                    </div>
                </div>
            );
        }

        var nowPart = dateutils.getNowPart();
        var parts = this.props.forecast.parts.map(function (part) {
            if (isToday && dateutils.isPartLessThen(part.type, nowPart)) {
                return;
            }

            if (-1 === [
                    'night',
                    'morning',
                    'day',
                    'evening'
                ].indexOf(part.type)) {
                return null;
            }

            var temp = part.temp_min || part.temp;

            return (
                <li className="weather-brief__part" style={{backgroundColor: temp2color(temp)}}>
                    <div className="weather-brief__part-type">
                        {dateutils.getPartTranslation(part.type)}
                    </div>
                    <WeatherIcon className="weather-brief__part-icon" icon={part.weather_icon} />
                    <div className="weather-brief__part-temp-min">
                        {temp}
                    </div>
                    <div className="weather-brief__part-temp-max">
                        {part.temp_max || null}
                    </div>
                </li>
            );
        });

        return (
            <div className="weather-brief__day">
                <div className={titleClasses}>
                    {dateutils.getTitle(new Date(this.props.forecast.date))}
                </div>
                {fact}
                <ul className="weather-brief__parts">
                    {parts}
                </ul>
            </div>
        );
    }
});

var WeatherBrief = React.createClass({
    render: function () {
        var days = this.props.forecast.map(function (forecast, i) {
            var date = new Date(forecast.date);
            var props = {forecast: forecast};

            if (date < dateutils.getToday()) {
                return null;
            }

            if (dateutils.isToday(new Date(forecast.date))) {
                props.fact = this.props.fact;
            }

            return (<WeatherBriefDay key={i} {...props} />);
        }.bind(this));

        return (
            <div className="weather-brief">
                {days}
            </div>
        );
    }
});

module.exports = WeatherBrief;
