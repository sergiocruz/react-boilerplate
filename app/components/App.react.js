'use strict';

var React = require('react');
var Navbar = require('./Navbar');

// Router
var Router       = require('react-router');
var RouteHandler = Router.RouteHandler;

// App
var ReactApp = module.exports = React.createClass({

  /**
   * Initial state
   * @return {Object} The state object
   */
  getInitialState: function() {
    return {
      messages: this.props.messages
    };
  },

  /**
   * Executes when component is done mounting
   * @return {Void}
   */
  componentDidMount: function() {},

  /**
   * Renders component
   * @return {React}
   */
  render: function() {
    return (
      /* jshint ignore:start */
      <div className="react-app">

        <div className="row">
          <div className="large-12 columns">

            <Navbar />

            <h1>
              React Sergio&nbsp;
              <small>SSR boilerplate</small>
            </h1>

            <hr />

          </div>
        </div>

        <div className="row">
          <div className="large-12 columns">
            <RouteHandler/>
          </div>
        </div>

      </div>
      /* jshint ignore:end */
    );
  }
});
