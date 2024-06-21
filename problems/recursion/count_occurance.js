// array = [1,2,3,4,2,3,5,2]
// key = 2
// output => 3 [how many time the key is present in this array]

function countKey(array, key){
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if(array[i] === key){
      count++;
    }
  }
  return count;
}

const array = [1,2,2,3,2]
const key = 2

// console.log(countKey(array, key));

function countKeyRecursive(array, key){
  if(array.length === 0){
    return 0;
  }

  if(array[0] === key){
    return 1 + countKeyRecursive(array.splice(1), key);
  }

  return 0 + countKeyRecursive(array.splice(1), key);

}

//another recursive approach
function countKeyRecursive2(array, key, index = 0){
  if(array.length === index){
    return 0;
  }

  if(array[index] === key){
    return 1 + countKeyRecursive2(array, key, index + 1);
  }

  return 0 + countKeyRecursive2(array, key, index + 1);
}



// console.log(countKeyRecursive2(array, key));

//another recursive approach
function countKeyRecursive3(array, key, index = 0){
  if(array.length === index){
    return 0;
  }

  return (array[index] === key ? 1 : 0) + countKeyRecursive3(array, key, index + 1);

}

// console.log(countKeyRecursive3(array, key));