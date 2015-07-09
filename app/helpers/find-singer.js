import Ember from 'ember';

export function findSinger(contestant, part) {
  var singer = contestant.singers.findBy('part', part);
  return singer.name;
}

export default Ember.HTMLBars.makeBoundHelper(findSinger);
