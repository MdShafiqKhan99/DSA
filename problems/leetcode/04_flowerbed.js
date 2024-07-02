/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if(flowerbed[i] === 0){

      const isLeftEmpty = ( i === 0 || flowerbed[i - 1] === 0)  // first item or the current item is 0
      const isRightEmpty = ((i === flowerbed.length - 1) || flowerbed[i + 1] === 0 ) // last item of the current item is 0

      if(isLeftEmpty && isRightEmpty){
        flowerbed[i] = 1;
        count++;
        
        if(count >= n){
          return true;
        }
      }
    }
  }

  return count >= n;
};


const flowerbed = [1,0,0,0,1];

console.log(canPlaceFlowers(flowerbed, 2));