module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  var config = require('./config/global.json');

  grunt.initConfig({
    concurrent: {
      dev: {
        tasks: ['nodemon', 'node-inspector', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    "node-inspector": {
      custom: {
        options: {
          'web-port': 1337,
          'web-host': 'localhost',
          'debug-port': 5857,
          'save-live-edit': true,
          'no-preload': true,
          'stack-trace-limit': 4,
          'hidden': ['node_modules']
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          args: ['--debug'],
          nodeArgs: ['--harmony'],
          env: {
            NODE_ENV : 'development',
            PORT: '3000'
          },
          watch: ['config', 'services'],
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
            // nodemon.on('config:update', function () {
            //   setTimeout(function() {
            //     require('open')('http://localhost:3000');
            //   }, 1000);
            // });
            // nodemon.on('restart', function () {
            //   setTimeout(function() {
            //     require('fs').writeFileSync('.rebooted', 'rebooted');
            //   }, 1000);
            // });
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['build', 'serve']);
  grunt.registerTask('serve',  ['concurrent:dev']);
  grunt.registerTask('build', function () {
    // no-op
  });

};
