/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let zeroCount = 0;
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if(nums[right] === 0){
      zeroCount++;
    }

    while(zeroCount > 1){
      if(nums[left] === 0){
        zeroCount--;
      }
      left++;
    }

    if(zeroCount === 1){
      maxLen = Math.max(maxLen, right - left)
    }
  }

  return zeroCount === 0 ? nums.length - 1 : maxLen;

};

/*
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

*/

console.log(longestSubarray([1,1,1]))