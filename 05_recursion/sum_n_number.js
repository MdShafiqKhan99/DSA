// iterative approach

function sumNthNum(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// console.log(sumNthNum(10));


function sumNthNumRecursive(n){
    if (n === 1){
        return 1;
    }

    return n + sumNthNumRecursive(n - 1);
}

// console.log(sumNthNumRecursive(100));
