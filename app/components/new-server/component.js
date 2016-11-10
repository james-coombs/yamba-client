import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  newServer: {
    name: null,
  },

  actions: {
    createServer() {
      if (this.get('newServer.name') !== null) {
        let server = this.get('newServer');
        this.sendAction('createServer', server);
        this.set('newServer.name', null);
      } else {
        this.get('flashMessages')
          .danger('Please name your new Board.');
      }
    }
  }
});
