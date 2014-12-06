var React = require('react/addons');
var WeatherFact = require('./weather_fact');
var WeatherIcon = require('./weather_icon');
var dateutils = require('../utils/date');
var temp2color = require('../utils/temp2color');

var DayColumn = React.createClass({
    getBarHeightPercent: function () {
        var height =
            (50 / (this.props.maxTemp - this.props.minTemp))
            * (this.props.temp - this.props.minTemp);

        return (50 + height).toFixed(2) + '%';
    },

    render: function () {
        var weekdayClasses = React.addons.classSet({
            "weather-visual__column-weekday": true,
            "weather-visual__column-weekday-weekend": dateutils.isWeekend(this.props.date)
        });

        var barStyle = {
            backgroundColor: temp2color(this.props.temp),
            height: this.getBarHeightPercent()
        }

        return (
            <div className="weather-visual__column">
                <div className="weather-visual__column-bar" style={barStyle}>
                    <div className="weather-visual__column-temp">
                        {this.props.temp}
                    </div>
                    <WeatherIcon className="weather-visual__column-icon" icon={this.props.weatherIcon} />
                    <div className={weekdayClasses}>
                        {dateutils.getShortWeekday(this.props.date)}
                    </div>
                </div>
            </div>
        );
    }
});

var WeatherVisual = React.createClass({


    render: function () {
        var minTemp = null;
        var maxTemp = null;

        var daysForecast = [];
        var today = dateutils.getToday();
        var count = 0;
        this.props.forecast.forEach(function (forecast) {
            var date = dateutils.toDate(forecast.date);
            if (count > 8 || today >= date) {
                return;
            }

            for (var i = forecast.parts.length - 1; i >= 0; i--) {
                if (forecast.parts[i].type === 'day_short') {
                    var temp = forecast.parts[i].temp

                    minTemp = null === minTemp ? temp : Math.min(minTemp, temp);
                    maxTemp = null === maxTemp ? temp : Math.max(maxTemp, temp);

                    daysForecast.push({
                        date: date,
                        temp: temp,
                        weatherIcon: forecast.parts[i].weather_icon
                    });
                }
            };

            count++;
        });

        var days = daysForecast.map(function (forecast) {
            return <DayColumn
                    maxTemp={maxTemp}
                    minTemp={minTemp}
                    {...forecast} />;
        });

        return (
            <div className="weather-visual">
                <WeatherFact
                    fact={this.props.fact}
                    fillBackground={false}
                    showBriefIndicators={false}
                    showDetailIndicators={false}/>

                <div className="weather-visual__columns">
                    {days}
                </div>
            </div>
        );
    }
});

module.exports = WeatherVisual;
