/*********************
 * Module dependencies
 *********************/

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport')
  , config = require('./config/config')
  , flash = require('connect-flash')
  , LocalStrategy = require('passport-local').Strategy;

/*********************
 * Route Imports
 *********************/
 var index = require('./routes/index');
 var pizza = require('./routes/pizza');

//Set up database
var mongoose = require('mongoose')
mongoose.connect(config.db)


var db = mongoose.connection
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db)
})

/***************
 * Configuration
 ***************/
var app = express();

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.set('view engine', 'jade');
app.set('views', path.join(__dirname + '/../client/app/views'));


/* Add this to fire the server */
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

// require('./config/passport')(passport); // pass passport for configuration

// use passport session
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// require('./config/routes.js')(app, passport);
app.use('/api', index);
app.use('/pizza', pizza);

/**
 * Production Settings
 */
if('production' == app.get('env')) {
  console.log("PRODUCTION");
  app.use(express.static(path.join(__dirname, '/dist')));


  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
      var err = new Error('INVALID EXPRESS ROUTE (404)');
      err.status = 404;
      // res.send('404: Not found', 404);
      //next(err);
      res.render('404', err);
  });

  //
  // app.use(function(err, req, res, next){
  //   console.error(err.stack);
  //   res.send(500, 'Something broke!');
  // });
}
/**
 * Development Settings
 */
 // console.log(path.join(__dirname, '../client/app'));
if ('development' == app.get('env')) {
  console.log("DEV");
  // This will change in production since we'll be using the dist folder
  app.use(express.static(path.join(__dirname, '../client/.tmp')));

  // This covers serving up the index page
  app.use(express.static(path.join(__dirname, '../client/app')));

  // This is the new way to handle errors in Express 4. not errorHandler().
  // For more about error-first best practices see http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500, 'Something broke!');
  });


}


module.exports = app;
