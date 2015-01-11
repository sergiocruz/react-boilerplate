'use strict';

// Dependencies
var express  = require('express');
var app      = express();
var React    = require('react');
var Router   = require('react-router');
var routes   = require('./routes');
var port     = process.env.PORT || 8080;

// View engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/**
 * API with fake database
 */
var messages = require('./stores/messages');
var i = 4;
var api = express().

  // Get list of messages
  get('/messages', function(req, res) {
    res.json(messages);
  }).

  // Insert new message to array of messages
  post('/messages', function(req, res) {

    var id = i++;

    var message = {
      id: id,
      text: 'Message ' + id
    };

    messages.push(message);

    res
      .status(201)
      .json({
        message: message
      });
  });


/**
 * Renders application, this is where the isomorphic magic happens
 * @param  {Object}   req  The request object
 * @param  {Object}   res  The response object
 * @param  {Function} next Error handler
 * @return {Void}
 */
function renderApp(req, res, next) {

  // State object shared between front and backend
  var state = {
    'messages': messages
  };

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

  // Static assets
  use(express.static(__dirname + '/../public')).

  // API Route
  use('/api', api).

  // Rest of requests
  use(renderApp).

  // Start server
  listen(port);
