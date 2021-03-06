var fs = require('fs');
var path = require('path');
var _ = require('lodash')

module.exports = function(app) {
  projectPage(app, readPackage('ember-demos/node_modules/ember-notify/package.json'), {
    demo: '/assets/ember-demos/#/ember-notify',
    //image: '/assets/images/IMG_20150110_155753.jpg',
    body_class: 'light-background',
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
  projectPage(app, readPackage('node_modules/ember-devtools/package.json'), {
    description: 'Console dev tools for Ember.js'
  });
};

function projectPage(app, project, opts) {
  project = _.assign({
    github: 'https://github.com/aexmachina/' + project.name,
    travis: true
  }, project, opts);
  console.log(project.name);
  app.get('/' + project.name, (req, res) => {
    res.render(project.name, {
      body_class: 'project-page ' + project.name + ' ' + opts.body_class,
      project: project
    });
  });
}

function readPackage(packagePath) {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), packagePath)));
}
