const { isUnique } = require('./1.1');
const { isPermutationOf } = require('./1.2');
const { replaceSpaces } = require('./1.3');
const { isPermutationOfPalindrome } = require('./1.4');

describe('1.1 - isUnique', () => {
  test('should return false for a word with repeated chars', () => {
    expect(isUnique('boot')).toBe(false);
  });

  test('should return true for a word with unique chars', () => {
    expect(isUnique('favorite')).toBe(true);
  });
});

describe('1.2 - isPermutationOf', () => {
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

describe('1.3 - replaceSpaces', () => {
  test('should replace the spaces of a string with \'%20\'', () => {
    expect(replaceSpaces('Mr John Smith   ')).toBe('Mr%20John%20Smith');
  });

  test('should not replace the spaces in a string that only contains spaces', () => {
    expect(replaceSpaces('    ')).toBe('');
  });
});

describe('1.4 - isPermutationOfPalindrome', () => {
  test('should return true for a permutation of a palindrome', () => {
    expect(isPermutationOfPalindrome('tactcoa')).toBe(true);
  });

  test('should return false for a word that is not a permutation of a palindrome', () => {
    expect(isPermutationOfPalindrome('basketball')).toBe(false);
  });

  test('should ignore spaces', () => {
    expect(isPermutationOfPalindrome('tact coa')).toBe(true);
  });

  test('should ignore case', () => {
    expect(isPermutationOfPalindrome('Tact Coa')).toBe(true);
  });
});
