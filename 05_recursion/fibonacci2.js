function fibonacci(value){
    let n0 = 0;
    let n1 = 1;
    let temp = 0;

    for (let i = 0; i < value; i++) {
        temp = n0 + n1;
        n0 = n1;
        n1 = temp;
    }

    return n0

}

function fibonacciRecursive(n){
    if(value <= 1){
        return value;
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}