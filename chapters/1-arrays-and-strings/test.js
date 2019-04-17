const { isUnique } = require('./1.1');

describe('isUnique', () => {
  test('should return false for a word with repeated chars', () => {
    expect(isUnique('boot')).toBe(false);
  });

  test('should return true for a word with unique chars', () => {
    expect(isUnique('favorite')).toBe(true);
  });
});
