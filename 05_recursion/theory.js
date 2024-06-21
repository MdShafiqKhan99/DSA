// recursion is a tool that describes an action in terms of it self
// there are two types of recursion, direct recursion and indirect recursion

/*

Direct Recursion: When a function call itself from inside itself, then it is called Direct recursion. 

Indirect Recursion: Sometimes, some logical part of a function is defined inside another helper function 
and this helper function is called from inside the main function, and again this helper function calls the main function, 
thus recursion occurs. 

A base case must be checked inside recursive function, when the base case is reached function will return and 
unwinding calls will be started. 

Recursive calls creates a stack of function calls. At first it is not executed, just functions are called and 
push into function call stack. 

always we have to take care of the unwinding calls. because, function execution starts 
after based case is hitted.

*/ 

// Calculate Factorial
function factorial(n){
    // base case
    if(n === 0){
        return 1;
    }
    // recursive call
    return n * factorial(n - 1);
}

// 

// another example of a direct recursion
function printNum(min, max){
    // base case
    if(min > max){
        return;
    }

    printNum(min + 1, max);
    console.log();
    
}

// in this function, at first functions will be called and pushed inside a stack, when base case is reached, 
// then unwinding calls will start and console.log will be executed, 
// output of printNum(5) => 5,4,3,2,1, because in this function, console.log() is not reached until base case is hitted.

function printNum(min, max){
    //base case
    if(min > max){
        return;
    }

    console.log(min)
    printNum(min + 1, max);
}

// in this function, console.log() will be executed first and then recursive call will happen, 
// output of printNum(5) => 1,2,3,4,5

// example of Indirect Recursion

/*
Logical part is seperated from the main function and called from the main function, again the local part will call the main function
*/ 

function printNum(min, max) {
    // base case
    if(min > max){
        return;
    }
    
    min = min + 1;
    logic(min, max);
}

function logic(min, max){
    // another base case
    if(min > max){
        return;
    }

    // recursive call
    printNum(min, max);
}
