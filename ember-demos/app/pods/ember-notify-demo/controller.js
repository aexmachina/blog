import Ember from 'ember';

export default Ember.Controller.extend({
  message: 'Hello, world!',
  raw: false,
  closeAfter: 2500,
  notify: Ember.inject.service('notify'),
  actions: {
    info: showLevel('info'),
    alert: showLevel('alert'),
    success: showLevel('success'),
    warning: showLevel('warning')
  }
});

function showLevel(level) {
  return function() {
    var message = {
      closeAfter: Number(this.get('closeAfter'))
    };
    message[this.get('raw') ? 'html' : 'text'] = this.get('message');
    this.get('notify').show(level, message);
  };
}
