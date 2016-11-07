import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePage (page) {
      this.sendAction('deletePage', page);
    },
    createPage (page) {
      this.sendAction('createPage', page);
    },
  },
});
