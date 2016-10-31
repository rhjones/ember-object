import Ember from 'ember';

const Pet = Ember.Object.extend({
  eat: () => 'nom nom nom',
  sleep: () => 'zzz',
});

let bruce = Pet.create({
  name: 'Bruce',
  age: 9,
});

bruce.get('age');
bruce.set('age', 10);
bruce.get('age');

const Dog = Pet.extend({
  bark: () => 'arf',
});

let jellybeans = Dog.create({
  name: 'Jellybeans',
  age: 7,
});

console.log(jellybeans.get('bark')());