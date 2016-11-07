import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  user: DS.attr(),
  pages: DS.hasMany('page')
});
