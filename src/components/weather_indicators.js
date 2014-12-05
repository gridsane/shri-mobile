var React = require('react/addons');

var WeatherIndicators = React.createClass({
    getDefaultProps: function () {
        return {
            showWindDir: false
        };
    },

    renderWindDir: function () {
        return (<span>{this.props.wind},&nbsp;</span>);
    },

    renderSuntime: function () {
        if (!this.props.sunrise || !this.props.sunset) {
            return null;
        }

        return (
            <li>
                <span className="weather-day__indicators-name">
                    Восход
                </span>
                <span className="weather-day__indicators-value">
                    {this.props.sunrise}
                </span>
                &nbsp;
                <span className="weather-day__indicators-name">
                    Закат
                </span>
                <span className="weather-day__indicators-value">
                    {this.props.sunset}
                </span>
            </li>
        );
    },

    getClassName: function () {
        var classes = {"weather-day__indicators": true};

        if (this.props.className) {
            classes[this.props.className] = true;
        }

        return React.addons.classSet(classes);
    },

    render: function () {
        return (
            <ul className={this.getClassName()}>
                <li>
                    <span className="weather-day__indicators-name">
                        Ветер
                    </span>
                    <span className="weather-day__indicators-value">
                        {this.props.showWindDir ? this.renderWindDir() : null}
                        {this.props.wind_speed} м/с
                    </span>
                </li>
                <li>
                    <span className="weather-day__indicators-name">
                        Влажность
                    </span>
                    <span className="weather-day__indicators-value">
                        {this.props.humidity}%
                    </span>
                </li>
                <li>
                    <span className="weather-day__indicators-name">
                        Давление
                    </span>
                    <span className="weather-day__indicators-value">
                        {this.props.pressure} мм рт. ст.
                    </span>
                </li>
                {this.renderSuntime()}
            </ul>
        );
    }
});

module.exports = WeatherIndicators;
