'use strict';

var React        = require('react');
var Router       = require('react-router');
var Route        = Router.Route;
var DefaultRoute = Router.DefaultRoute;

/**
 * Routes
 * @type {String}
 */
module.exports = (
  /* jshint ignore:start */
  <Route name="app" path="/" handler={require('./components/App.react')}>
    <DefaultRoute handler={require('./components/Page.home')}/>
    <Route path="/about" name="about" handler={require('./components/Page.about')}/>
  </Route>
  /* jshint ignore:end */
);
