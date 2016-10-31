import Ember from 'ember';

const Pet = Ember.Object.extend({
  eat: () => { console.log('nom nom nom'); },
  sleep: () => { console.log('zzz'); },
});

let bruce = Pet.create({
  name: 'Bruce',
  age: 9,
});

bruce.get('age');
bruce.set('age', 10);
bruce.get('age');

const Dog = Pet.extend({
  bark: () => { console.log('arf'); },
});

let jellybeans = Dog.create({
  name: 'Jellybeans',
  age: 7,
});

jellybeans.bark();