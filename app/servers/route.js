import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('server');
  },

  actions: {
    deleteServer(server) {
      server.destroyRecord();
    },

    createServer(data) {
      let server = this.get('store').createRecord('server', data);
      server.save();
    },

    editServer(server) {
      this.transitionTo('server/edit', server);
    },
  }
});
