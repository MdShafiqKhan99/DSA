/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWaterArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
      const length = right - left;
      const width = Math.min(height[left], height[right]);
      const area = length * width;
      if(area > maxWaterArea){
        maxWaterArea = area;
      }

      // move  pointers
      if(height[left] < height[right]){
        left++
      } else {
        right--
      }
    }

    return maxWaterArea;
};

