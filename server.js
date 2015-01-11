'use strict';

// Activating JSX
require('node-jsx').install();

// Dependencies
var express  = require('express');
var React    = require('react');
var Router   = require('react-router');

// Vars used
var app      = express();
var port     = process.env.PORT || 8080;
var routes   = require('./app/routes');


/**
 * Renders application, this is where the isomorphic magic happens
 * @param  {Object}   req  The request object
 * @param  {Object}   res  The response object
 * @param  {Function} next Error handler
 * @return {Void}
 */
function renderApp(req, res, next) {

  // State object shared between front and backend
  var state = {};

  // TODO: Handle 404 routes...

  var router = Router.create({
    routes: routes,
    location: req.url,
    onAbort: function (redirect) {
      console.log('Routing Aborted');
    },
    onError: function (err) {
      console.log('Routing Error');
      console.log(err);
      next(err);
    }
  });

  router.run(function(Handler) {

    // TODO: how to get route state from here?

    // Render React to a string, passing in our fetched tweets
    var markup = React.renderToString(
      Handler(state)
    );

    // Render our 'home' template
    res.render('index', {
      markup: markup, // Pass rendered react markup
      state: JSON.stringify(state) // Pass current state to client side
    });
  });
}


/**
 * Start server
 */
app.

  // View engine
  set('view engine', 'ejs').

  // Location of views
  set('views', __dirname + '/app/views').

  // Static assets
  use(express.static(__dirname + '/public')).

  // Rest of requests
  use(renderApp).

  // Start server
  listen(port, function() {
    console.log('--- Listening on port ', port);
  });
