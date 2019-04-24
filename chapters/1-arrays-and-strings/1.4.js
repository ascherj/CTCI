exports.isPermutationOfPalindrome = (str) => {
  const formattedString = str.replace(/\s/g, '').toLowerCase();
  const count = {};
  formattedString.split('').forEach((char) => {
    if (count[char] && count[char] > 2) {
      return false;
    }
    count[char] = (count[char] || 0) + 1;
  });
  if (Object.values(count).sort((a, b) => a - b)[1] === 1) {
    return false;
  }
  return true;
};
