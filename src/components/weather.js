var React = require('react/addons');
var ReactAsync = require('react-async');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var superagent = require('superagent');
var Brief = require('./weather_brief');

function getWeatherInfo(locality, callback) {
    superagent.get(
        'http://ekb.shri14.ru/api/localities/' + locality,
        function(err, res) {
            callback(err, res ? res.body : null);
        }
    );
};

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

    renderTabLink: function (pane, text) {
        return (
            <Link
                className="weather__tabs-button"
                activeClassName="weather__tabs-button-active"
                to={pane}
                params={{locality: this.props.locality}}>
                {text}
            </Link>
        );
    },

    render: function () {
        return (
            <div className="weather">
                <div className="weather__tabs">
                    {this.renderTabLink('brief', 'Кратко')}
                    {this.renderTabLink('detail', 'Подробно')}
                    {this.renderTabLink('visual', 'Наглядно')}
                </div>
                <div className="weather__pane">
                    <RouteHandler {...this.state} />
                </div>
            </div>
        );
    }
});

module.exports = Weather;
