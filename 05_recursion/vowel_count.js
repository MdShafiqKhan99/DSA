

function isVowel(char){
    const vowels = "aeiou";
    return vowels.includes(char.toLowerCase());
}

// iterative approach 

function vowelCount(string){
    let count = 0;
    let index = 0;

    while(index < string.length){
        if(isVowel(string[index])){
            count++;
        }
        index++;
    }
    return count;
}

// vowels count recursive

function vowelCountRecursive(string, stringLength){
    if(stringLength === 1){
        return Number(isVowel(string[0]));
    }

    return vowelCountRecursive(string, stringLength - 1) + isVowel(string[stringLength - 1])
}

let testString
console.log(vowelCountRecursive(testString, testString.length))