var fs = require('fs');
var path = require('path');
var _ = require('lodash')

module.exports = function(app) {
  projectPage(app, readPackage('ember-demos/node_modules/ember-notify/package.json'), {
    demo: '/assets/ember-demos/#/ember-notify',
    image: 'IMG_20150110_155753.jpg',
    description: 'Notifications for Ember.js'
  });
  projectPage(app, readPackage('node_modules/lugg/package.json'), {
    description: 'Simple logging for Node.js'
  });
  projectPage(app, readPackage(
    'content/themes/aexmachina/bower_components/jquery-bonsai/bower.json'), {
    description: 'Super lightweight jQuery tree plugin',
    travis: false
  });
};

function projectPage(app, project, opts) {
  project = _.assign({
    github: 'https://github.com/aexmachina/' + project.name,
    travis: true
  }, project, opts);
  app.get('/' + project.name, (req, res) => {
    res.render(project.name, {
      body_class: 'project-page light-background ' + project.name,
      image: '/assets/images/' + project.image,
      project: project
    });
  });
}

function readPackage(packagePath) {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), packagePath)));
}
