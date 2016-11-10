import Ember from 'ember';

export default Ember.Route.extend({
  uploads: Ember.inject.service(),
  model(params) {
    return this.get('store').findRecord('server', params.server_id);
  },

  actions: {
    deletePage (page) {
      page.destroyRecord();
    },

    createPage (newPage) {
      // let createdPage = this.get('store').createRecord('page', newPage);
      // createdPage.save();
      // We can console log the newMovie object to ensure it is being passed through
       return this.get('uploads').newPageUpload(newPage) // This will use the uploads service, which gives us access to the `newMovieUpload` function.
      .then(() => this.refresh()) // Once the upload is successful, we will transition to our list of movies and if all worked, we should see the newly created movie
      .catch((error) => console.error(error));
    },
  }
});
