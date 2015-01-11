'use strict';
/* jshint unused:false, browser:true */

var React  = require('react');
var Router = require('react-router');
var routes = require('./routes');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

// Render the components, picking up where react left off on the server
Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(
    /* jshint ignore:start */
    <Handler messages={initialState.messages} />,
    document.getElementById('app-root')
    /* jshint ignore:end */
  );
});
