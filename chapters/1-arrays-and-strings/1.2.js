exports.isPermutationOf = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1.charAt(i)) && !str1.includes(str2.charAt(i))) return false;
  }
  return true;
};
