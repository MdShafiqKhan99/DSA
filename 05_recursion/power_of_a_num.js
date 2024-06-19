// user will input (2,4), here 2 is the base number, and 4 is the exponential 

function power(base, exp){
  if(exp === 0){
    return 1;
  }
  return base * power(base, exp - 1);
}

// console.log(power(2,3));