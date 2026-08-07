// Removing duplicates


const RemoveDuplicate=(num)=>{
   return [...new Set(num)]
}
console.log(RemoveDuplicate([1,2,4,1,2,4]))
console.log(RemoveDuplicate([5,6,7,7,8,8,9]))
console.log(RemoveDuplicate([1,2,3,4]))
console.log(RemoveDuplicate([]))