var React = require('react');
var fs = require('fs');
var logoImage = fs.readFileSync(__dirname + '/../images/logo.svg', 'base64');

var Header = React.createClass({
  render: function () {
    return (
      <div className="header">
        <img className="header-logo" src={"data:image/svg+xml;base64," + logoImage}/>
        <div className="header-appname">Погода</div>
      </div>
    );
  }
});

module.exports = Header;
