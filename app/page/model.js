import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  image_url: DS.attr('string'),
  attached_image: DS.attr('boolean'),
  image_file_name: DS.attr('string'),
  canBeDeleted: DS.attr('boolean'),
  server: DS.belongsTo('server')
});
