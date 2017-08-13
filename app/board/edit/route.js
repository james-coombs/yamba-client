import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('board', params.board_id);
  },

  actions: {
    saveBoard(board) {
      board.save()
        .then(() => this.transitionTo('boards'));
    },
  }
});
