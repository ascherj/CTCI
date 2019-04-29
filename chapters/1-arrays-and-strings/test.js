const { isUnique } = require('./1.1');
const { isPermutationOf } = require('./1.2');
const { replaceSpaces } = require('./1.3');
const { isPermutationOfPalindrome } = require('./1.4');
const { oneAway } = require('./1.5');
const { compressString } = require('./1.6');

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

describe('1.5 - oneAway', () => {
  test('should return true for a char that is removed', () => {
    expect(oneAway('pale', 'ple')).toBe(true);
  });

  test('should return true for a char that is added', () => {
    expect(oneAway('pales', 'pale')).toBe(true);
  });

  test('should return true for a char that is replaced', () => {
    expect(oneAway('pale', 'bale')).toBe(true);
  });

  test('should return false for two strings that differ by two chars', () => {
    expect(oneAway('pale', 'bake')).toBe(false);
  });

  test('should return false for strings whose lengths differ by more than 1', () => {
    expect(oneAway('the', 'themes')).toBe(false);
  });
});

describe('1.6 - compressString', () => {
  test('should compress a string with repeated chars', () => {
    expect(compressString('aabcccccaaa')).toBe('a2b1c5a3');
  });

  test('should return the original string if the compressed string is longer', () => {
    expect(compressString('abcde')).toBe('abcde');
  });
});
