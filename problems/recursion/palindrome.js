// if a reversed word is as same is the previous word is called palindrome
// madam => madam => palindrome
// hello => olleh => not palindrome


function palindrome(string){
  if(string.length <= 1){
    return true;
  }

  if(string[0] == string[string.length - 1]){
    return palindrome(string.substring(0, string[string.length - 1]))
  } else {
    return false;
  }
}

console.log(palindrome("madam"));