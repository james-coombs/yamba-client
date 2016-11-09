import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  newPageUpload(newPage) {
    return this.get('ajax').post('/pages', { // This will use the ajax service and allow us to send a post request to the `/movies` route on in API
      data: newPage, // The FormData object which we have called `newMovie`
      contentType: false,
      processData: false,
    });
  },
});
