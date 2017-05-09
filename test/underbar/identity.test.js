const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(53)).toBe(53);
  });

  it('returns the same array if given an array', () => {
    const arr = [1, 2, 3, 4];
    expect(_.identity(arr)).toBe(arr);
  });

  it('returns the same object if given an object', () => {
    const obj = {
      1: 'A',
      2: 'B',
      3: 'C'
    }
    expect(_.identity(obj)).toBe(obj);
  });
});