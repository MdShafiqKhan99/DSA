
const coins = [5,12,4];
const amount = 8;

function sumPossible(amount, coins, memo = {}){

  if(amount in memo) return memo[amount];
  if(amount === 0) return true;
  if(amount < 0) return false;

  for (const coin of coins) {
    if(sumPossible(amount - coin, coins, memo)){
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
}

console.log(sumPossible(amount, coins));