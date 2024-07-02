/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversed = "";
    let word = "";

    for (let i = 0; i < s.length; i++) {
      if(s[i] !== " "){
        word += s[i];
      } else if(word.length > 0){
        reversed = word + " " + reversed;
        word = "";
      }
    }
    if(word.length > 0){
      reversed = word + " " + reversed;
    }
    return reversed.trim();
};


const s = "the     sky is blue";


console.log(reverseWords(s));