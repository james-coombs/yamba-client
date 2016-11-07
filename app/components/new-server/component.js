import Ember from 'ember';

export default Ember.Component.extend({
  newCollection: {
    name: null,
  },

  actions: {
    createServer() {
      let data = this.get('newServer');

      if (this.get('data.name') !== null)

      {
        data.server = this.get('server');
        this.sendAction('createServer', data);
      }

      this.set('newPage.title', null);
      this.set('newPage.body', null);
    },
  }
});
