var React = require('react');

var WeatherIndicators = React.createClass({
    getDefaultProps: function () {
        return {
            isBrief: true,
        };
    },

    render: function () {
        return (
            <dl className="weather-day__fact-indicators">
                <dt className="weather-day__fact-indicators-name">
                    Ветер
                </dt>
                <dd className="weather-day__fact-indicators-value">
                    {/* направление ветра для подробного */}
                    {this.props.wind_speed} м/с
                </dd>

                <dt className="weather-day__fact-indicators-name">
                    Влажность
                </dt>
                <dd className="weather-day__fact-indicators-value">
                    {this.props.humidity}%
                </dd>

                <dt className="weather-day__fact-indicators-name">
                    Давление
                </dt>
                <dd className="weather-day__fact-indicators-value">
                    {this.props.pressure} мм рт. ст.
                </dd>
                {/* восход-закат для подробного */}
            </dl>
        );
    }
});

module.exports = WeatherIndicators;
