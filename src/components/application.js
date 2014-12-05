var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header = require('./header');
var Search = require('./search');
var Footer = require('./footer');

var Application = React.createClass({
    mixins: [Router.State],

    render: function () {
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
                    <RouteHandler locality={this.getParams().locality} />
                    <Footer />
                </body>
            </html>
        );
    }
});

module.exports = Application;
