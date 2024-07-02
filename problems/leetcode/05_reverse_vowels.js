/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const characters = s.split('');
    const vowels = "aeiouAEIOU";
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        while (left < right && !vowels.includes(characters[left])) {
            left++;
        }
        while (left < right && !vowels.includes(characters[right])) {
            right--;
        }

        // swap
        if(left < right){
            let temp = characters[left];
            characters[left] = characters[right];
            characters[right] = temp;
        }
        left++;
        right--;
    }
    return characters.join('');
}

console.log(reverseVowels("my"));
