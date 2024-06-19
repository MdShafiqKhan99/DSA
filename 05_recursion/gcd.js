// Greatest Common Divisor

// if m === n, return any of m or n
// if m > n, again call gcd(m - n, n);
// if m < n, again call gcd(m, n-m);

function gcd(m, n){
    if(m === n){
        return m;
    }

    if(m > n){
        return gcd(m - n, n);
    } else {
        return gcd(m, n - m);
    }
}

// console.log(gcd(60,42))
