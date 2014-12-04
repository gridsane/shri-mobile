var path = require('path');
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

app
    .use("/assets", express.static(path.resolve(__dirname + "/../assets")))
    .use(renderState)
    .listen(port, function () {
        console.log("Server listening on port " + port);
    });
