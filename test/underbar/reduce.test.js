const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const array = [1, 2, 3, 4, 5];
    expect(_.reduce(array, (a, b) => a + b, 4)).toBe(19);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const array = [1, 2, 3, 4, 5];
    expect(_.reduce(array, (a, b) => a + b)).toBe(15);
  });

});