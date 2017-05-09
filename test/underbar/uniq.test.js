const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [1, 2, 2, 2, 2, 1, 4, 5, 4];
    expect(_.uniq(nums)).toEqual([1, 2, 4, 5]);
  });
});