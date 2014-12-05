var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./header');
var Search = require('./search');
var Footer = require('./footer');

var Application = React.createClass({
    getDefaultProps: function () {
        return {
            locality: 213,
            pane: 'brief',
            history: true
        };
    },

    render: function (locality) {
        return (
            <html>
                <head>
                    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
                    <title>Yandex Weather</title>
                    <link rel="stylesheet" href="/assets/main.css"/>
                    <script src="/assets/bundle.js"/>
                </head>
                <body>
                    <Header />
                    <Search />
                    <RouteHandler locality={this.props.locality} />
                    <Footer />
                </body>
            </html>
        );
    }
});

module.exports = Application;
