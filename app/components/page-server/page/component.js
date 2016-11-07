import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      this.sendAction('delete', this.get('page'));
    },
  }
});
