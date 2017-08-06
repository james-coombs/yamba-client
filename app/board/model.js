import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  user: DS.attr(),
  canBeDeleted: DS.attr('boolean'),
  pages: DS.hasMany('page')
});
