var path = require('path');
var superagent = require('superagent');
var React = require('react');
var ReactAsync = require('react-async');
var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

require('node-jsx').install();
var Application = require('./client');

function renderState(req, res, next) {
    var client = React.createElement(Application, {path: req.url});

    ReactAsync.renderToStringAsync(client, function (err, markup) {
        if (err) {
            next(err);
        }

        res.send('<!DOCTYPE html>\n' + markup);
    });
}

// http://ekb.shri14.ru/icons/ovc.svg
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
    .use(renderState)
    .listen(port, function () {
        console.log("Server listening on port " + port);
    });
