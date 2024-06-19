// implementing string length without using the default .length method

function length(string){
    let index = 0;

    while(string[index]){ // check until the current character is null or undefined.
        index++;
    }

    return index;
}

// console.log(length("hello world"))


function lengthRecursive(string){
    if(!string){
        return 0;
    }
    return 1 + lengthRecursive(string.substring(1));
}

console.log(lengthRecursive("hello world"));