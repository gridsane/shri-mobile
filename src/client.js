var React = require('react');
var Header = require('./components/header');
var Search = require('./components/search');
var Weather = require('./components/weather');
var Footer = require('./components/footer');

var Application = React.createClass({
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
                    <Weather />
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
