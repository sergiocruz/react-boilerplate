'use strict';

var $ = require('jquery');
var React = require('react');

// Router
var Router       = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link         = Router.Link;

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
   * Custom method: adds message by json
   * @return {Void}
   */
  _addMessage: function() {

    var self = this;

    $.post('/api/messages', function(json) {

      // Including new message
      self.state.messages.push(json.message);

      // Set state
      self.setState({
        messages: self.state.messages
      });

    });
  },

  /**
   * Renders component
   * @return {React}
   */
  render: function() {
    return (
      <div className="react-app">

        <ul>
          <li><Link to="app">Home</Link></li>
          <li><Link to="dashboard">Dashboard</Link></li>
        </ul>

        <RouteHandler/>

      </div>
    );
  }
});
