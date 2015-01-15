module.exports = function(app) {
  app.get('/ember-notify', (req, res) => {
    res.render('ember-notify');
  });
};
