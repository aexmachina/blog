import Ember from 'ember';

export default Ember.Controller.extend({
  message: 'Hello, world!',
  raw: false,
  closeAfter: 2500,
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
    message[this.get('raw') ? 'raw' : 'message'] = this.get('message');
    this.notify.show(level, message);
  };
}
