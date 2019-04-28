exports.oneAway = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) return false;
  let index1 = 0;
  let index2 = 0;
  let edits = 0;
  while (index1 < str1.length && index2 < str2.length) {
    if (str1.charAt(index1) === str2.charAt(index2)) {
      index1 += 1;
      index2 += 1;
    } else {
      edits += 1;
      if (edits > 1) return false;
      if (str1.charAt(index1 + 1) === str2.charAt(index2)) {
        index1 += 1;
      } else if (str2.charAt(index2 + 1) === str1.charAt(index1)) {
        index2 += 1;
      } else if (str1.charAt(index1 + 1) === str2.charAt(index2 + 1)) {
        index1 += 1;
        index2 += 1;
      }
    }
  }
  return true;
};
