/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let index = 0;
  let i = 0;

  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[j] === chars[i]) {
      j++;
    }
    
    let count = j - i;

    chars[index] = chars[i];
    index++;

    if(count > 1){
      for (const str of count.toString()) {
        chars[index] = str;
        index++;
      }
    }
    i = j;
    
  }

  return index;
};



const input1 = ["a","a","b","b","c","c","c"]



/*
  Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
  Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
*/

const input2 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
/* 
  Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1", "2"].
  Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
*/

console.log(compress(input1));
console.log(compress(input2));