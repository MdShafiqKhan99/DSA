function fibTribMemo(n, memo = {}) {
  if(n in memo) return memo[n];

  if(n <= 1){
    return n;
  }

  memo[n] = fibTribMemo(n - 1, memo) + fibTribMemo(n - 2, memo);
  return memo[n];
}

console.log(fibTribMemo(1400));