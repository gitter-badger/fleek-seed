var koa        = require('koa');
var router     = require('fleek-router');
var logger     = require('koa-logger');
var bodyParser = require('koa-bodyparser');
var app        = koa();
var routeConf  = {};
// var errorHadnler = require('fleek-error');

// swagger based authentication
// routeConf.authenticate = require('./lib/authenticate.js').isAuthenticated;

// errorHandler(app, {
//
// });

// derive the error structures from the definitions
app.use(function *(next) {
  // TODO: replace with fleek-error
  // app.use(fleek-error(function *(err) {
  //   this.body = 'default override'
  // }));
  try {
    yield next
    if (!this.body) {
      this.status = 404;
      this.body   = {
        status  : 404,
        success : false,
        data    : 'Not Found'
      }
    }
  } catch (e) {
    console.log(e.stack ? e.stack : e);
    this.status = 500;
    this.body   = {
      status  : 500,
      success : false,
      data    : 'Internal server Error'
    }
  }
});


app.use(logger());
app.use(bodyParser());

// routeConf.fleekError : true; // TODO

// swagger view access
routeConf.injector = true; // accepts swagger-injector config

// swagger based validation for requests
routeConf.validate = {
  error : function *(err, next) {
    this.status = 400;
    this.body   = {
      status  : 400,
      success : false,
      data    : err
    };
  }
}

// apply the swagger routes
router(app, routeConf);
console.log('Listening on port 5000');
app.listen(5000);
