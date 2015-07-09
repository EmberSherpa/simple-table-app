import DS from 'ember-data';

export default DS.Model.extend({
  singers: DS.hasMany('singer', { async: true })
});
