var ghost = require('ghost');
var path = require('path');
var app = require('express')();
require('basement/basics').init();
var config = require('config-node');

var appP = require('src/app').init();
appP.then(function(app) {
    return ghost({config: config.ghostConfig})
      .then(function(ghostServer) {
        app.use(ghostServer.rootApp);
        ghostServer.start(app);
      });
  })
  .catch(function(err) {
    try { require('lugg')('main').error(err); }
    catch(e) { console.error(err); }
    process.exit(1);
  });
