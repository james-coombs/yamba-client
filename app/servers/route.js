import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('server');
  },

  actions: {
    deleteServer(server) {
      server.destroyRecord();
    },

    createServer(server) {
      let createdServer = this.get('store').createRecord('server', server);
      createdServer.save();
    },

    editServer(server) {
      this.transitionTo('server/edit', server);
    },
  }
});
