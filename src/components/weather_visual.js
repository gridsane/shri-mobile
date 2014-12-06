var React = require('react/addons');
var WeatherFact = require('./weather_fact');
var WeatherIcon = require('./weather_icon');
var dateutils = require('../utils/date');
var temp2color = require('../utils/temp2color');

var DayColumn = React.createClass({
    render: function () {
        var temp, weatherIcon;
        for (var i = this.props.parts.length - 1; i >= 0; i--) {
            if (this.props.parts[i].type === 'day_short') {
                temp = this.props.parts[i].temp;
                weatherIcon = this.props.parts[i].weather_icon;
                break;
            }
        };


        var date = new Date(this.props.date);
        var weekdayClasses = React.addons.classSet({
            "weather-visual__column-weekday": true,
            "weather-visual__column-weekday-weekend": dateutils.isWeekend(date)
        });

        return (
            <div className="weather-visual__column">
                <div className="weather-visual__column-bar" style={{backgroundColor: temp2color(temp)}}>
                    <div className="weather-visual__column-temp">
                        {temp}
                    </div>
                    <WeatherIcon className="weather-visual__column-icon" icon={weatherIcon} />
                    <div className={weekdayClasses}>
                        {dateutils.getShortWeekday(date)}
                    </div>
                </div>
            </div>
        );
    }
});

var WeatherVisual = React.createClass({
    render: function () {
        var today = dateutils.getToday();
        var columnCount = 0;
        var days = this.props.forecast.map(function (forecast) {
            if (columnCount < 8 && today < dateutils.toDate(forecast.date)) {
                columnCount++;
                return <DayColumn {...forecast} />;
            }

            return null;
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
