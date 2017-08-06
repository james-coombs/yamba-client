import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      this.sendAction('delete', this.get('board'));
    },

    edit () {
       this.sendAction('edit', this.get('board'));
    }
  },
});
