const arr = [1,2,3,4,5]

// 1,3,5 = 9
// 2, 4 = 6


function houseRobber(nums, i=0, memo = {}){
  if(i in memo) return memo[i];
  if(i >= nums.length) return 0;

  const skip = houseRobber(nums, i + 1, memo);
  const take = nums[i] + houseRobber(nums, i + 2, memo);

  memo[i] = Math.max(take, skip);

  return memo[i];

}

console.log(houseRobber(arr));