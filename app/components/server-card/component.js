import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      this.sendAction('delete', this.get('server'));
    },

    edit () {
       this.sendAction('edit', this.get('server'));
    }
  },
});
