import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('server', params.server_id);
  },

  actions: {
    deletePage (page) {
      page.destroyRecord();
    },

    createPage (data) {
      let page = this.get('store').createRecord('page', data);
      page.save();
    },
  }
});
