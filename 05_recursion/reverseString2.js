function reverseString(string){
    let reversed = "";
    let lastIndex = string.length - 1;
    while(lastIndex >= 0){
        reversed += string[lastIndex];
        lastIndex--;
    }
    return reversed;
}

function reverseStringRecursive(string){
    if(string === ""){
        return string;
    }

    return string[string.length - 1] + reverseStringRecursive(string.substring(0, string.length - 1));
}