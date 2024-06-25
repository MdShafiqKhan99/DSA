const coins = [10];
const amount = 10;

function coinChange(amount, coins, memo = {}){

  if(amount in memo) return memo[amount];
  if(amount === 0) return 0;
  if(amount < 0) return -1;

  let minCount = Infinity;

  for (const coin of coins) {
    const result = coinChange(amount - coin, coins, memo);
    if(result !== -1){
      minCount = Math.min(minCount, result + 1)
    }
  }

  memo[amount] = minCount === Infinity ? -1 : minCount;
  return memo[amount]

}

// console.log(coinChange(amount, coins));


