/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  let currentStr = "";
  let currentNum = 0;

  for (const char of s) {
    if(char >= '0' && char <= '9'){
      currentNum = currentNum * 10 + (char - '0');
    } else if(char === '[') {

      stack.push(currentNum);
      stack.push(currentStr);

      currentNum = 0;
      currentStr = '';

    } else if(char === ']'){
      const prevStr = stack.pop();
      const repeatTimes = stack.pop();
      currentStr = prevStr + currentStr.repeat(repeatTimes);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
};

console.log(decodeString("100[leetcode]"))

/**
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
 */