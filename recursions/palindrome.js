//1. If the string is made of no letters or just one letter, then it is a palindrome.
//2. Otherwise, compare the first and last letters of the string.
//3. If the first and last letters differ, then the string is not a palindrome.
//4. Otherwise, the first and last letters are the same. Strip them from the string, 
// and determine whether the string that remains is a palindrome. 
// Take the answer for this smaller string and use it as the answer for the original string.



var palindrome = function (str) {
//base case
if(str.length === 0 || str.length === 1){
    return 'is a palindrome'
};
if(firstCharacter(str) != lastCharacter(str)){
    return 'is not a palindrome'
};
return palindrome(midcharacter(str))
    
}

var firstCharacter = function(str){
return str.slice(0,1);
};
var lastCharacter = function(str){
    return str.slice(-1)
};
var midcharacter = function(str){
    return str.slice(1, -1)
}

console.log("Is this word a palindrome", palindrome('motor'))