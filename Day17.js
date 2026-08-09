//  Write a function to convert the string to a camelCase

const toCamelCase=(str)=>{
// convert str to arr with removal of trailing space

// str=str.trim().split(" ");
// console.log(str)
// str=str.map((currEle,index)=>{
//     // if first word of str
//     if(index===0){
//         return currEle.toLowerCase();
//     }
//     else{
//         // making first char to upper case then concatenating the remaining word in lowercase
//         return currEle.charAt(0).toUpperCase() + currEle.slice(1).toLowerCase();
//     }
// })
// return str.join("");
// can also use chaining method
str=     str.trim().split(" ")
                   .map((currEle,index)=>{
                    // if first word of str
                    if(index===0){
                        return currEle.toLowerCase();
                    }
                    else{
                        // making first char to upper case then concatenating the remaining word in lowercase
                        return currEle.charAt(0).toUpperCase() + currEle.slice(1).toLowerCase();
                    }
                    })
                    .join("");
 return str;

}

console.log(toCamelCase("hello world singh"))