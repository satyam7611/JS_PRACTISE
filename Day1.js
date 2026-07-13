// ------------------------------------------------------------------
//* Programming Question: Longest Word in a String
// ------------------------------------------------------------------

//? Q: Write a function FindLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:

//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:

//? If the input string is empty or contains only whitespace, the function should return false.
//? The function should ignore leading and trailing whitespace when determining the longest word.


const FindLongestWord=(str)=>{
 if(str.trim().length===0 )
 {
    return false;
 }
 // converting str to array;

 strArr=str.split(" ");
// method 1
//  str=strArr.sort((a,b)=>a.length-b.length)
//  console.log(str[str.length-1])

// method 2

strArr=strArr.reduce((acc,currElem)=>currElem.length>acc.length?currElem:acc,'')
console.log(strArr)

}

FindLongestWord("Welcome to the world of ArtificialIntelligence");