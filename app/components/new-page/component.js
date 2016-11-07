import Ember from 'ember';

export default Ember.Component.extend({
  newPage: {
    title: null,
    body: null,
    code: null,
    image: null,
  },

  actions: {
    createPage() {
      let data = this.get('newPage');

      if (this.get('data.title') !== null &&
        this.get('data.body') !== null)

      {
        data.server = this.get('server');
        this.sendAction('createPage', data);
      }

      this.set('newPage.title', null);
      this.set('newPage.body', null);
    },
  }
});
