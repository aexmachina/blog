import Ember from 'ember';

export default Ember.Controller.extend({
  currentPathDidChange: function() {
    Ember.run.once(() => Ember.run.next(this.didChangePath.bind(this)));
  }.observes('currentPath'),
  didChangePath: function() {
    $('.ember-application').foundation();
  }
});
