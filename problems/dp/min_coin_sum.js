const coins = [5,12,5];
const amount = 22;

function minCoin(coins, amount, memo = {}){
  if(amount in memo) return memo[amount];
  if(amount === 0) return 0;
  if(amount < 0) return -1;

  let min = Infinity;

  for (const coin of coins) {
    const result = minCoin(coins, amount - coin, memo)
    if(result !== -1){
      min = Math.min(min, result + 1);
    }
  }

  memo[amount] = min === Infinity ? -1 : min;
  return memo[amount];

}

console.log(minCoin(coins, amount));