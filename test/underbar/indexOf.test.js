const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(_.indexOf(array, 1)).toEqual(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(_.indexOf(array, 6)).toEqual(5);
  });

  it('returns -1 for a missing value', () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(_.indexOf(array, 8)).toEqual(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const array = [1, 2, 3, 4, 5, 6, 2, 3, 4, 2, 2, 3];
    expect(_.indexOf(array, 3)).toEqual(2);
  });

  it('starts searching at the given offset', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 5, 3, 2, 4];
    expect(_.indexOf(array, 5, 3)).toBe(4);
  });

});