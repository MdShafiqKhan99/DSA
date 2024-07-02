/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let currentAltitude = 0;
  let maxAltitude = 0;

  for(let i = 0; i < gain.length; i++){
    currentAltitude += gain[i];
    maxAltitude = Math.max(maxAltitude, currentAltitude);
  }

  return maxAltitude;
};

console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))

/*
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
*/