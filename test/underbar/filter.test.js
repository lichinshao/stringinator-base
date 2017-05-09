const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const array = [1, 2, 3, 4, 5];
    expect(_.filter(array, num => num %2 === 1)).toEqual([1, 3, 5]);
  });

  it('filters an object to only numeric values', () => {
    const array = [3, 'horse', 5, 'pool'];
    expect(_.filter(array, num => typeof num === 'number')).toEqual([3, 5]);
  });
});