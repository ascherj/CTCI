exports.isUnique = (string) => {
  const seen = {};
  for (let i = 0; i < string.length; i++) {
    const currentChar = string.charAt(i);
    if (seen[currentChar]) return false;
    seen[currentChar] = true;
  }
  return true;
};
