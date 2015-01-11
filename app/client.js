'use strict';

var React = require('react');
var ReactApp = require('./components/App.react');
var Router = require('react-router');
var routes   = require('./routes');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

// Render the components, picking up where react left off on the server
Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(
    <Handler messages={initialState.messages} />,
    document.getElementById('app-root')
  );
});
