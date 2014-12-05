var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var Application = require('./components/application');
var Weather = require('./components/weather');
var WeatherBrief = require('./components/weather_brief');
var WeatherDetail = require('./components/weather_detail');
var WeatherVisual = require('./components/weather_visual');

var routes = (
    <Route path="/:locality" handler={Application}>
        <Route handler={Weather}>
            <Route name="brief" path="brief" handler={WeatherBrief}/>
            <Route name="visual" path="visual" handler={WeatherVisual}/>
            <Route name="detail" path="detail" handler={WeatherDetail}/>
        </Route>
    </Route>
);

if (typeof window !== 'undefined') {
    window.onload = function () {
        Router.run(routes, Router.HistoryLocation, function (Handler) {
            React.render(<Handler/>, document);
        });
    }
}

module.exports = routes;
