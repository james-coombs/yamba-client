import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  newPage: {
    // title: null,
    // body: null
  },

  actions: {
    // createPage() {
    //   if (this.get('newPage.title') && this.get('newPage.body') !== null) {
    //     let newPage = this.get('newPage');
    //     newPage.server = this.get('server');
    //     this.sendAction('createPage', newPage);
    //     this.set('newPage', null);
    //   } else {
    //     this.get('flashMessages')
    //       .danger('Please give your new page a title & body.');
    //   }
    // },
    createPage() {
      let newPage = new FormData(document.getElementById('new-page-form')); // Ember jQuery to find the form by it's id.
      this.sendAction('createPage', newPage); // Grabs the newMovie object which has been converted into FormData and sends it up to the route template
      document.getElementById("new-page-form").reset();
      this.set('newPage', null); // Resets the newMovie Object
    }
  }
});
