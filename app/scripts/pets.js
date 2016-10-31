'use strict';

const Pet = Ember.Object.extend({
  eat: () => { console.log('nom nom nom') },
  sleep: () => { console.log('zzz') },
});

let bruce = Pet.create({
  name: 'Bruce',
  age: 9,
});

bruce.set('age', 10);

const Dog = Pet.extend({
  bark: () => { console.log('arf') },
});

let jellybeans = Dog.create({
  name: 'Jellybeans',
  age: 7,
});