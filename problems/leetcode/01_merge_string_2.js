const word1 = "Leethello"
const word2 = "Codehi"

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string} 
*/

var mergeAlternately = function(word1, word2) {

  let merged = "";
  let i = 0;

  while (i < Math.min(word1.length, word2.length)) {
    merged += word1[i] + word2[i];
    i++;
  }

  merged += word1.substring(i) + word2.substring(i);

  return merged;
}

console.log(mergeAlternately(word1, word2));