import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('board');
  },

  actions: {
    deleteServer(board) {
      board.destroyRecord();
    },

    createBoard(board) {
      let createdServer = this.get('store').createRecord('board', board);
      createdServer.save();
    },

    editBoard(board) {
      this.transitionTo('board/edit', board);
    },
  }
});
