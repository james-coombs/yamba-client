import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePage (page) {
      this.sendAction('deletePage', page);
    },
    createPage (newPage) {
      this.sendAction('createPage', newPage);
    },
  },
});
