const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const array = [1, 2, 3, 4, 5];
    expect(_.some(array, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const array = [0, 2, 4, 6];
    expect(_.some(array, num => num %2 === 1)).toBe(false);
  });

});