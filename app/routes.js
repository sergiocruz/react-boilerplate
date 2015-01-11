var React        = require('react');
var Router       = require('react-router');
var Route        = Router.Route;
var DefaultRoute = Router.DefaultRoute;

/**
 * Routes
 * @type {String}
 */
module.exports = (
  <Route name="app" path="/" handler={require('./components/App.react')}>
    <DefaultRoute handler={require('./components/Home')}/>
    <Route path="/dashboard" name="dashboard" handler={require('./components/Dashboard')}/>
  </Route>
);
