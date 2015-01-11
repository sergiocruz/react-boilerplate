'use strict';

var React = require('react');
var Link  = require('react-router').Link;


module.exports = React.createClass({
  render: function() {

    return (
      /* jshint ignore:start */
      <div className="nav-bar right">
        <ul className="button-group">
          <li><Link className="button" to="app">Home</Link></li>
          <li><Link className="button" to="about">About</Link></li>
        </ul>
      </div>
      /* jshint ignore:end */
    );

  }
});
