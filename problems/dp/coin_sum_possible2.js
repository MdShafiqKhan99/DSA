const coins = [5,12,5];
const amount = 22;

function sumPossible(coins, amount, memo = {}){
  if(amount in memo) return memo[amount];
  if(amount === 0) return true;
  if(amount < 0) return false;

  for (const coin of coins) {
    if(sumPossible(coins, amount - coin, memo) === true){
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
}

console.log(sumPossible(coins, amount))
