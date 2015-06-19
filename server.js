var koa     = require('koa');
var swagger = require('swagger-injector');
// var router  = require('fleek-router')
var app     = koa();

app.use(swagger.koa({
  swagger  : './config/swagger.json', // default ./swagger.json
  route    : '/swagger', // default /swagger
  restrict : {
    key : 'Swag Bag',
    // OR
    // key : {
    //   name  : 'swag-key',
    //   value : 'Swag Bag'
    // },
    // host  : 'dome.host.com' // defaults to request host
    // port  : '4000' // defaults to request host
    accept: ['header']
  },
  unauthorized : function *() {
    this.status = 401;
    this.body   = {
      success : false,
      data    : 'Access denied'
    }
  }
}));


// router(app, {
//   authenticate : require('./lib/authenticate.js').isAuthenticated,
//   validate     : {
//     error : function *(err, next) {
//       this.status(400);
//       this.body = { success : false}
//     }
//   }
// });

app.listen(5000);
