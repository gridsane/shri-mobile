var React = require('react');
var WeatherFact = require('./weather_fact');

var WeatherVisual = React.createClass({
    render: function () {
        return (
            <div className="weather-visual">
                <WeatherFact
                    fact={this.props.fact}
                    fillBackground={false}
                    showBriefIndicators={false}
                    showDetailIndicators={false}/>
            </div>
        );
    }
});

module.exports = WeatherVisual;
