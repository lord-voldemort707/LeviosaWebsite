import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  code: DS.attr(),
  playerCount: DS.attr(),
  players: DS.attr()
});
