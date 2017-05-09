const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      {name: 'Bob', age:43},
      {name: 'Julia', age: 15},
      {name: 'Mike', age: 38}
    ];
    expect(_.pluck(people, 'age')).toEqual([43, 15, 38]);
  });

});