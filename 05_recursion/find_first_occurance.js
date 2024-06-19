// iterative approach
/*
    given array = [3,4,5,8,7,9,2,1]
    target = 5
    currentIndex = 0
    > output = 2
    if not found = -1
*/


function firstOccurance(array, target, currentIndex){
    while (currentIndex < array.length) {
        if(array[currentIndex] === target) {
            return currentIndex;
        }
        currentIndex++;
    }
    return -1;
}

function firstOccurRecursive(array, target, currentIndex){
    if(array.length === currentIndex){
        return -1;
    }

    if(array[currentIndex] === target){
        return currentIndex;
    }

    return firstOccurRecursive(array, target, currentIndex + 1)
}


const array = [3,4,5,8,7,9,2,1]
target = 7
currentIndex = 0

console.log(firstOccurRecursive(array, target, currentIndex));