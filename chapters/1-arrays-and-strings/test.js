const { isUnique } = require('./1.1');
const { isPermutationOf } = require('./1.2');

describe('isUnique', () => {
  test('should return false for a word with repeated chars', () => {
    expect(isUnique('boot')).toBe(false);
  });

  test('should return true for a word with unique chars', () => {
    expect(isUnique('favorite')).toBe(true);
  });
});

describe('isPermutationOf', () => {
  test('should return true for a word that is a permutation of the other', () => {
    expect(isPermutationOf('bake', 'beak')).toBe(true);
  });

  test('should return false for a word that is not a permutation of the other', () => {
    expect(isPermutationOf('bake', 'book')).toBe(false);
  });

  test('should return false for words of different lengths', () => {
    expect(isPermutationOf('bake', 'baker')).toBe(false);
  });

  test('should return true for two empty strings', () => {
    expect(isPermutationOf('', '')).toBe(true);
  });
});
