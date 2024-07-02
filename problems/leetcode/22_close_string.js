/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if(word1.length !== word2.length) {
    return false;
  }

  const freequencyMap1 = new Map()
  const freequencyMap2 = new Map()

  for (const char of word1) {
    freequencyMap1.set(char, (freequencyMap1.get(char) || 0) + 1)
  }

  for (const char of word2) {
    freequencyMap2.set(char, (freequencyMap2.get(char) || 0) + 1)
  }

  const characters1 = new Set(freequencyMap1.keys());
  const characters2 = new Set(freequencyMap2.keys());

  if(characters1.size !== characters2.size) {
    return false;
  }

  console.log(characters1);
  console.log(characters2);


  const haveSameCharacters = [...characters1].every(char => characters2.has(char));

  if(!haveSameCharacters){
    return false;
  }

  const sortedFreequency1 = Array.from(freequencyMap1.values()).sort((a,b) => a-b).join(',');
  const sortedFreequency2 = Array.from(freequencyMap2.values()).sort((a,b) => a-b).join(',');

  if(sortedFreequency1 !== sortedFreequency2){
    return false;
  }

  return true;

};

console.log(closeStrings("uau", "ssx"));

/*
1. check length
2. FM1, FM2
3. check size of FM -> keys
4. check have same characters
5. FM -> Array -> sort -> toString
6. compare both strings


*/

/*
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.


Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"


*/