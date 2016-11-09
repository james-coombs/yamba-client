import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('server', params.server_id);
  },

  actions: {
    deletePage (page) {
      page.destroyRecord();
    },

    createPage (page) {
      let newPage = this.get('store').createRecord('page', page);
      newPage.save();
    },
  }
});
