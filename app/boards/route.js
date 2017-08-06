import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('board');
  },

  actions: {
    deleteServer(board) {
      board.destroyRecord();
    },

    createServer(board) {
      let createdServer = this.get('store').createRecord('board', board);
      createdServer.save();
    },

    editServer(board) {
      this.transitionTo('board/edit', board);
    },
  }
});
