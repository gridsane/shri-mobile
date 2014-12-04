var React = require('react');

var Weather = React.createClass({
    render: function () {
        return (
            <div className="weather">
                <div className="weather__tabs">
                    <a href="#" className="weather__tabs-button weather__tabs-button-active">Кратко</a>
                    <a href="#" className="weather__tabs-button">Подробно</a>
                    <a href="#" className="weather__tabs-button">Наглядно</a>
                </div>
            </div>
        );
    }
});

module.exports = Weather;
