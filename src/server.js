var path = require('path');
var superagent = require('superagent');
var React = require('react');
var ReactAsync = require('react-async');
var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

require('node-jsx').install();
var Router = require('react-router');
var routes = require('./client');

app.get(/^\/([\d]+)\/(brief|detail|visual)$/, function (req, res, next) {
    Router.run(routes, req.path, function (Handler) {
        ReactAsync.renderToStringAsync(React.createElement(Handler), function (err, markup) {
            res.send('<!DOCTYPE html>\n' + markup);
        });
    });
});

app.get('/', function (req, res) {
    superagent.get('http://ip-api.com/json/' + req.ip)
    .end(function (err, response) {
        if (err || 'fail' === response.body.status) {
            res.redirect('/213/brief');
            return;
        }

        superagent.get(
            'http://ekb.shri14.ru/api/geocode?coords=' + [
                response.body.lon,
                response.body.lat
            ].join(','))
        .end(function (err, geoidResponse) {
            if (err || 200 !== geoidResponse.status) {
                res.redirect('/213/brief');
                return;
            }

            res.redirect('/' + geoidResponse.body.geoid + '/brief');
        });
    });
});

app.get(/^\/([\d]+)$/, function (req, res) {
    res.redirect(req.params[0] + '/brief');
});

app.get('/icons/:icon.svg', function (req, res) {
    superagent.get(
        'http://ekb.shri14.ru/icons/' + req.params.icon + '.svg',
        function (svgRes) {
            if (200 === svgRes.statusCode) {
                res
                    .set({'Content-Type': svgRes.headers['content-type']})
                    .send(svgRes.body);
            } else {
                res.status(404).send('Not found');
            }
        });
});

app
    .use("/assets", express.static(path.resolve(__dirname + "/../assets")))
    .listen(port, function () {
        console.log("Server listening on port " + port);
    });
