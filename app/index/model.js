import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  pages: DS.attr(),
  boards: DS.attr(),
});
