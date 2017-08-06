import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('board', params.server_id);
  },

  actions: {
    saveServer(board) {
      board.save()
        .then(() => this.transitionTo('boards'));
    },
  }
});
