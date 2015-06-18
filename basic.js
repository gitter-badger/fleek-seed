var fleekAuthenticator = require('./../lib');
var route              = require('koa-router');
var koa                = require('koa');

var app = koa();

var authenticate = fleekAuthenticator(app, {

});

var publicRouter = new route();
secureRouter.post('/login', function *() {
  this.body = 'test';
});

var secureRouter = new route();
secureRouter.get('/restricted', authenticate, function *() {
  this.body = 'success!!!'
});

app.listen(3000);
