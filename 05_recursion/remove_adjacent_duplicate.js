

function removeAdjDup(inputStr){
  let result = "";

  for (let i = 0; i < inputStr.length; i++) {
    console.log(i);
    if(inputStr[i] !== inputStr[i + 1]){
      result += inputStr[i];
    }
  }

  return result;

}

// console.log(removeAdjDup("aaaaabbbbbcccccc"));

//

function recursiveRAD(inputStr){

  console.log(inputStr);

  if(inputStr.length <= 1){
    return inputStr;
  }

  if(inputStr[0] === inputStr[1]){
    return recursiveRAD(inputStr.substring(1));
  } else {
    return inputStr[0] + recursiveRAD(inputStr.substring(1));
  }

}

console.log(recursiveRAD("Hellllooo"));