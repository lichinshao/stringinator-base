const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(_.isArrayLike(array)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const obj = {
      length: 5,
      4: 8, 
      what: 'the heck'
    };
    expect(_.isArrayLike(obj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const obj = {
      length: 'pony',
      4: 8, 
      what: 'the heck'
    }
    expect(_.isArrayLike(obj)).toBe(false);
  });
});
