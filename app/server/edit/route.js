import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('server', params.server_id);
  },

  actions: {
    saveServer (server){
      server.save();
        //.then(()=>this.transitionTo('servers'));
    },
  }
});
