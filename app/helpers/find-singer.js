import Ember from 'ember';

export function findSinger(contestant, part) {
  var singer = contestant.get('singers').findBy('part', part);
  return singer.get('name');
}

export default Ember.Handlebars.makeBoundHelper(findSinger);
