import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('server', params.server_id);
  },

  actions: {
    deletePage (page) {
      page.destroyRecord();
    },

    createPage (newPage) {
      // let createdPage = this.get('store').createRecord('page', newPage);
      // createdPage.save();
       console.log(newPage = " new Page");
    },
  }
});
