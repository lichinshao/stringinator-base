const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(_.reject(array, num => num % 2 === 1)).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    const obj = {
      name: 'Bruce',
      age: null,
      res: 'Hayward',
      drive: null
    };
    const values = _.reject(obj, val => val === null);
    expect(values).toEqual(['Bruce', 'Hayward']);
  });
});