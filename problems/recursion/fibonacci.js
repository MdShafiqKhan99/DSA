// fibonacci iterative approach

function fibonacci(value){

    let n0 = 0;
    let n1 = 1;
    
    for (let i = 0; i < value; i++) {
        let temp = n0 + n1;
        n0 = n1;
        n1 = temp;
    }

    return n0;
}

// 0, 1, 1, 2, 3, 5, 8

console.log(fibonacci(5));

function fibonacciRecursive(n){
    if(n <= 1){
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}