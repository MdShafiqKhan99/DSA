// reverse a string 

// iterative approch
// Hello => olleH

function reverseString(string){
    let reverse = "";
    let length = string.length - 1;

    while(length >= 0){
        reverse = reverse + string[length];
        length = length - 1;
    }

    return reverse;
}

// console.log(reverseString("Hello"));


// recursive approach

function reverseStringRecursive(string){
    if(string === ""){
        return string;
    }
    return string[string.length - 1] + reverseStringRecursive(string.length - 1);

}

/*

""              ""
h               h + ""
he              e + h + ""
hel
hell
hello

*/

console.log(reverseStringRecursive("hello world"));