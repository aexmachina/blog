var fs = require('fs');
var path = require('path');
var _ = require('lodash')

module.exports = function(app) {
  projectPage(app, readPackage('ember-demos/node_modules/ember-notify/package.json'), {
    demo: '/assets/ember-demos/#/ember-notify'
  });
  projectPage(app, readPackage('node_modules/lugg/package.json'), {
    description: 'Simple logging for Node.js'
  });
};

function projectPage(app, project, opts) {
  project = _.assign({
    image: 'IMG_20150110_155753.jpg',
    github: 'https://github.com/aexmachina/' + project.name
  }, project, opts);
  app.get('/' + project.name, (req, res) => {
    res.render(project.name, {
      body_class: 'project-page light-background',
      image: '/assets/images/' + project.image,
      project: project
    });
  });
}

function readPackage(packagePath) {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), packagePath)));
}
