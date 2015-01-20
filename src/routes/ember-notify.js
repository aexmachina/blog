var fs = require('fs');
var path = require('path');

module.exports = function(app) {
  var pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(),
      'ember-demos/node_modules/ember-notify/package.json'
  )));
  app.get('/ember-notify', (req, res) => {
    res.render('ember-notify', {
      body_class: 'project-page light-background',
      image: '/assets/images/IMG_20150110_155753.jpg',
      project: {
        name: pkg.name,
        version: pkg.version,
        github: 'https://github.com/aexmachina/' + pkg.name
      }
    });
  });
};
