//*------------------------------------------------------
//*  Interview Question: Count Occurrences of Character
//*------------------------------------------------------

//! Task:

//? Write a function called countChar that takes two parameters: a string and a character
//? to count. The function should return the number of times the specified character appears in
//? the string.

 // Output: 4

//todo Constraints:

//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should
//? accept any character that is part of the ASCII character set and is printable).

const countChar=(str,char)=>{
    str=str.toLowerCase();
  char=char.toLowerCase();

    str=str.split("");

    totalCount=str.reduce((acc,currEle)=>{
        if(currEle===char){
            acc+=1;
        }
        return acc;
    },0)
    return totalCount;
}

console.log(countChar("MissISsippi", "I"));