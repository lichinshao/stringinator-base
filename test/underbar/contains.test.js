const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const array = [2, 3, 4, 5, 6];
    expect(_.contains(array, 4)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const array = [2, 3, 4, 5, 6];
    expect(_.contains(array, 8)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {
      1: 3,
      2: 'hi',
      18: 15
    };
    expect(_.contains(obj, 'hi')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
     const obj = {
      1: 3,
      2: 'hi',
      18: 15
    };
    expect(_.contains(obj, 'hello')).toBe(false);
  });

});