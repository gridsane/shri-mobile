var React = require('react');

var Search = React.createClass({
  render: function () {
    return (
      <div className="search">
        <input className="search-input" type="text" />
        <button className="search-button">Найти</button>
      </div>
    );
  }
});

module.exports = Search;
