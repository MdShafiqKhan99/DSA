/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let length = nums.length;
  let left = new Array(length).fill(1);
  let right = new Array(length).fill(1);
  let answer = new Array(length);

  // build left side array
  for (let i = 1; i < length; i++) {
    left[i] = nums[i-1] * left[i-1];
  }

  // build right side array
  for (let i = length - 2 ; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1]
  }

  // build answer array
  for (let i = 0; i < length; i++) {
    answer[i] = left[i] * right[i];
  }
  return answer;
};




const input = [1,2,3,4]
const output = [24,12,8,6]

console.log(productExceptSelf(input));