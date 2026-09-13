
function getInitials(name){
    const names = name.split(' ');
    let initials = '';

    for(let i=0; i<names.length; i++){
        initials += names[i].charAt(0);
    }
    return initials;
}

function isPalindrome(str){
    // Remove space for accurate comparison
    str = str.replace(/\s/g, '').toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function countWords(str){
    const words = str.split(' ');
    return words.length;
}

const name = "Abdul Manan";
console.log("The initials of the name are: ", getInitials(name))
console.log("Is the \"Madam\" a palindrome? ", isPalindrome("Madam"));
console.log("Is the \"Race car\" a palindrome? ", isPalindrome("Race car"));
console.log("The number of words in the string is: ", countWords("This is a sample string for counting words."));
