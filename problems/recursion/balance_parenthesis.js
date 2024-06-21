/*
 array = ["(","(",")",")","(",")"]
 array2 = ["[", "{", "]", "}", "(", ")"]
*/


// iterative approach
function balancePar(array){
  if(array.length === 0){
    return false; // or a custom empty message
  }

  const stack = [];

  for (let i = 0; i < array.length; i++) {
    if(array[i] === "]"){
      // for square bracket
      if(stack.length !== 0 && stack[stack.length - 1] === "["){
        stack.pop();
      } else {
        return false;
      }
    } else if(array[i] === "}"){
      // for curly braces
      if(stack.length !== 0 && stack[stack.length - 1] === "{"){
        stack.pop();
      } else {
        return false;
      }
    } else if(array[i] === ")"){
      // for parenthesis
      if(stack.length !== 0 && stack[stack.length - 1] === "("){
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(array[i]);
    }
  }

  return stack.length === 0;
}

const array = ["(","]"]
const array2 = ["(", ")", "(", ")"]
console.log(balancePar(array))
// console.log(balancePar(array2))


function recursiveBalancePar(array, index = 0, count = 0){

  if(index === array.length){
    return count === 0;
  }

  if(count < 0){
    return false;
  }

  if(array[index] === "("){
    return recursiveBalancePar(array, index + 1, count + 1);
  } else if(array[index] === ")"){
    return recursiveBalancePar(array, index + 1, count - 1);
  } else {
    return false;
  }

}

// console.log(recursiveBalancePar(array))
// console.log(recursiveBalancePar(array2))

/*

["(","(",")",")","(",")"]
  0  1   2   3   4   5   6   


*/