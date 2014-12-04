var React = require('react/addons');
var Brief = require('./weather_brief');

var Weather = React.createClass({
    render: function () {
        return (
            <div className="weather">
                <div className="weather__tabs">
                    <a href="#" className="weather__tabs-button weather__tabs-button-active">Кратко</a>
                    <a href="#" className="weather__tabs-button">Подробно</a>
                    <a href="#" className="weather__tabs-button">Наглядно</a>
                </div>
                <div className="weather__pane">
                    <Brief />
                </div>
            </div>
        );
    }
});

module.exports = Weather;
