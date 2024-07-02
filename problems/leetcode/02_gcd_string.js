const str1 = "ABABAB";
const str2 = "ABAB";

var gcdOfStrings = function(str1, str2) {
  if(str1 + str2 !== str2 + str1) return "";

  function gcd(a,b){
    if(b.length === 0) {
      return a;
    }

    return gcd(b, a.slice(0, a.length % b.length)); 
    // Eucledian formula gcd(a,b) = gcd(a, b-a) / gcd(b, a-b)
  }

  return gcd(str1, str2);
};

console.log(gcdOfStrings(str1, str2));