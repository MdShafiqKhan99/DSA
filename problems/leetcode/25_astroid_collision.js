/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  for (let asteroid of asteroids) {
    let colide = false;
    while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
      const rightAsteroid = stack.pop();
      if(Math.abs(asteroid) === rightAsteroid) {
        colide = true;
        break;
      } else if(Math.abs(asteroid) < rightAsteroid) {
        asteroid = 0;
        stack.push(rightAsteroid);
        break;
      }
    }
    if(!colide && asteroid !== 0){
      stack.push(asteroid);
    }
  }

  return stack;
};

console.log(asteroidCollision([10,2,-5]))

/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

*/