import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  newPage: {
    title: null,
    body: null
  },

  actions: {
    createPage() {
      if (this.get('newPage.title') && this.get('newPage.body') !== null) {
        let page = this.get('newPage');
        page.server = this.get('server');
        this.sendAction('createPage', page);
        this.set('newPage.title', null);
        this.set('newPage.body', null);
      } else {
        this.get('flashMessages')
          .danger('Please give your new page a title & body.');
      }
    },
  }
});
