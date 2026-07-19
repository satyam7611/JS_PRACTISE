// Write a function findMax that takes an array of numbers
// as input and returns the maximum number in the array.


const findMax=(arr)=>{
    // const newArr=arr.sort((a,b)=>b-a)  // SORT IN DESCENDING
    // return newArr[0];
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}

// Example usage:
console.log(findMax([1, 5, 3, 9, 2]));        // Output: 9

console.log(findMax([5]));                    // Output: 5