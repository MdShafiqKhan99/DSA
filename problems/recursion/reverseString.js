
// Iterative Approach

function reverseString(string){
    let reversed = "";
    let length = string.length - 1;

    while(length >= 0){
        reversed += string[length];
        length = length - 1;
    }

    return reversed;
}

// console.log(reverseString("Hello"));

// Recursive Approach
function reverseStringRecursive(string){

    // base case
    if(string === ""){
        return string;
    }

    // we are adding current string's last character at first position and after this, we are concatinating the returned value from the child called function

    // [ string[string.length - 1 ] ] returns the last character of current string
    // [ reverseStringRecursive(string.substring(0, string.length - 1) ] returns the value from the previous function call

    /*
    expected output
    current string      returned string from previous unwinding function call 
    ""                  => ""   ( this is the base case, unwinding call execution starts from here)
    H                   => H + ""       => H
    He                  => e + H        => eH
    Hel                 => l + eH       => leH
    Hell                => l + leH      => lleH
    Hello               => o + lleH      => olleH
    */

    return string[string.length - 1 ] + reverseStringRecursive(string.substring(0, string.length - 1));

}

console.log(reverseStringRecursive("Hello"));

