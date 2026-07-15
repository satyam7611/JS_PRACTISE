// Write a function to determine whether a given string is
// a palindrome or not. A palindrome is a word, phrase,
// number, or other sequence of characters that reads the same
// forward and backward, ignoring spaces, punctuation, and
// capitalization.

function isAlphaNum(ch){
 if(ch>='0' && ch<='9' || ch.toLowerCase()>='a' && ch.toLowerCase()<='z'){
    return true;
 }
 return false;

}

function isPalindrome(str){
    let st=0;
    let end=str.length-1;
    while(st<end){
        if(!isAlphaNum(str.charAt(st))){
            st++;
            continue;
        }
        if(!isAlphaNum(str.charAt(end))){
            end--;
            continue;
        }
       if(str.charAt(st).toLowerCase()!==str.charAt(end).toLowerCase()){
        return false;
       }
 st++;
 end--;
    }

    return true;
}


console.log(isPalindrome("A man, a plan, a canal, Panama"));
// Output: true

console.log(isPalindrome("raceca"));
// Output: true

console.log(isPalindrome("hell"));
// Output: false

// ------------------------
// Constraints: