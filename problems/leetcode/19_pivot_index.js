/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let totalSum = nums.reduce((prev, curr) => prev + curr, 0);
  let leftSum = 0;
 
  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];
    if(leftSum === rightSum){
      return i;
    } 
    leftSum += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1,2,3]))

/*
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
*/