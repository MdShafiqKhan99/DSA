/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const countMap = new Map();
  const countSet = new Set();

  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const count of countMap.values()) {
    if(countSet.has(count)){
      return false;
    }
    countSet.add(count);
  }

  return true;

};

console.log(uniqueOccurrences([1,2]))

/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

*/