/*
Input: string (only uppercase and lowercase letters)
Output: compressed string (or original if shorter)
Constraints: time complexity - O(n)
Examples/edge cases:
  'aabcccccaaa' -> 'a2b1c5a3'
  'abcde'       -> 'abcde'
  ''            -> ''

  'aabcccccaaa'
  1)
    current count = 1
    prev char = 'a'
    current char equals prev char
    current count = 2
    prev char = 'a'
  2)
    current count = 2
    prev char = 'a'
    current char does not equal prev char
    result = 'a2'
    current count = 1
    prev char = 'b'
  3)
    current count = 1
    prev char = 'b'
    current char does not equal prev char
    result = 'a2b1'
    current count = 1
    prev char = 'c'
  4)
    current count = 1
    prev char = 'c'
    current char equals prev char
    current count = 2
    prev char = 'c'
  ...
*/
exports.compressString = (str) => {
  /*
  if empty string, return empty string
  initialize result var
  assign current count to 1
  assign prev char to first char
  iterate through chars in string starting at index 1
    if current char equals prev char
      increment current count
      if end of string
        append prev char and current count to result
    else
      append prev char and current count to result
      reset current count to 1
    assign prev char to current char
  if result is not shorter than original string
    return original string
  return result
  */
  if (str.length === 0) return '';
  let result = '';
  let currentCount = 1;
  let prevChar = str.charAt(0);
  for (let i = 1; i < str.length; i++) {
    const currentChar = str.charAt(i);
    if (currentChar === prevChar) {
      currentCount += 1;
      if (i === str.length - 1) {
        result += `${prevChar}${currentCount}`;
      }
    } else {
      result += `${prevChar}${currentCount}`;
      currentCount = 1;
    }
    prevChar = currentChar;
  }
  if (result.length >= str.length) return str;
  return result;
};
