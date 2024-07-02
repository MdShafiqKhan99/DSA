/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  nums.sort((a,b) => a-b);
  let operations = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if(sum === k){
      operations++
      left++;
      right--;
    } else if(sum < k) {
      left++
    } else {
      right--;
    }
  }
  return operations;
};

var maxOperations2 = function(nums, k) {
  let map = new Map();
  let operations = 0;

  for (const num of nums) {
    const complement = k - num;
    if(map.get(complement) > 0) {
    
      operations++;
      map.set(complement, map.get(complement) - 1);
    
    } else {
      map.set(num, (map.get(num) || 0) + 1)
    }
  }


  return operations;
}

console.log(maxOperations2([1,2,3,4,5], 6))