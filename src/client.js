var React = require('react');

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
                    Hello weather
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
