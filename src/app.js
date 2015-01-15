var express = require('express'),
    Bluebird = require('bluebird'),
    path = require('path');

exports.init = function(options = {}) {
  var app = express();

  app.disable('x-powered-by');
  var themeDir = path.resolve('content/themes/plattan');
  require('basement/views').init(app, {
    partialsDir: themeDir + '/partials',
    layoutsDir: themeDir
  });
  require('basement/api-middleware').init(app);
  require('basement/routes').init(app);

  return Bluebird.resolve(app);
};
