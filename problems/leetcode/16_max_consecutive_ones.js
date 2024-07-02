/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let maxLen = 0;
  let left = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if(nums[right] === 0){
      zeroCount++;
    }

    while (zeroCount > k) {
      if(nums[left] === 0){
        zeroCount--;
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1)

  }

  return maxLen;
};

/*
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

console.log(longestOnes([1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1], 15))