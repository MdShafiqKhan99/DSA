function balancePar(s){
  const arr = Array.from(s);

  if(arr.length === 0){
    return false; // or a custom empty message
  }

  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === "]"){
      // for square bracket
      if(stack.length !== 0 && stack[stack.length - 1] === "["){
        stack.pop();
      } else {
        return false;
      }
    } else if(arr[i] === "}"){
      // for curly braces
      if(stack.length !== 0 && stack[stack.length - 1] === "{"){
        stack.pop();
      } else {
        return false;
      }
    } else if(arr[i] === ")"){
      // for parenthesis
      if(stack.length !== 0 && stack[stack.length - 1] === "("){
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(arr[i]);
    }
  }

  return stack.length === 0;
}

console.log(balancePar("()[]{}"));