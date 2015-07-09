import Ember from 'ember';

export default Ember.Controller.extend({
  columns: ['Tenor', 'Bass', 'Baritone', 'Lead']
});

// Ember.Handlebars.registerBoundHelper('find-singer', function(contestant, part){
//   // var contestantPart = contestant.get('part');
//   // if(contestantPart == part){
//   //   return contestant.get('name');
//   // };
//   console.log(part);
// });
