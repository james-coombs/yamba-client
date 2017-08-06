import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  newBoard: {
    name: null,
  },

  actions: {
    createBoard() {
      if (this.get('newBoard.name') !== null) {
        let board = this.get('newBoard');
        this.sendAction('createBoard', board);
        this.set('newBoard.name', null);
      } else {
        this.get('flashMessages')
          .danger('Please name your new Board.');
      }
    }
  }
});
