module.exports = function(app) {
  app.get('/ember-notify', (req, res) => {
    res.render('ember-notify', {
      body_class: 'project-page light-background'
    });
  });
};
