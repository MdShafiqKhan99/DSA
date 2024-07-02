/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  const stack = [];
  if(s.indexOf('*') === -1) return s;

  for (const char of s.trim()) {
    if(char === '*'){
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};

console.log(removeStars("erase"));

/*
Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".

*/