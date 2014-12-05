var React = require('react/addons');
var ReactAsync = require('react-async');
var superagent = require('superagent');
var Brief = require('./weather_brief');

function getWeatherInfo(locality, callback) {
    superagent.get(
        'http://ekb.shri14.ru/api/localities/' + locality,
        function(err, res) {
            callback(err, res ? res.body : null);
        }
    )
}

var Weather = React.createClass({
    mixins: [ReactAsync.Mixin],

    getInitialStateAsync: function(callback) {
        getWeatherInfo(this.props.locality, callback);
    },

    componentWillReceiveProps: function(nextProps) {
        if (this.props.locality !== nextProps.locality) {
            getWeatherInfo(nextProps.locality, function(err, info) {
                if (err) {
                    throw err;
                }
                this.setState(info);
            }.bind(this));
        }
    },

    render: function () {
        return (
            <div className="weather">
                <div className="weather__tabs">
                    <a href="#" className="weather__tabs-button weather__tabs-button-active">Кратко</a>
                    <a href="#" className="weather__tabs-button">Подробно</a>
                    <a href="#" className="weather__tabs-button">Наглядно</a>
                </div>
                <div className="weather__pane">
                    <Brief {...this.state} />
                </div>
            </div>
        );
    }
});

module.exports = Weather;
