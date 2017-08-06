import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  newServer: {
    name: null,
  },

  actions: {
    createServer() {
      if (this.get('newServer.name') !== null) {
        let board = this.get('newServer');
        this.sendAction('createServer', board);
        this.set('newServer.name', null);
      } else {
        this.get('flashMessages')
          .danger('Please name your new Board.');
      }
    }
  }
});
