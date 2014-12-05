var React = require('react');
var Header = require('./components/header');
var Search = require('./components/search');
var Weather = require('./components/weather');
var Footer = require('./components/footer');

var Application = React.createClass({
    getDefaultProps: function () {
        return {
            locality: 213,
            pane: 'brief'
        };
    },

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
                    <Weather locality={this.props.locality} pane={this.props.pane} />
                    <Footer />
                </body>
            </html>
        );
    }
});

if (typeof window !== 'undefined') {
    window.onload = function() {
        React.render(React.createElement(Application), document);
    }
}

module.exports = Application;
