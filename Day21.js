//  write a funciton to calculate the mean of an elements of an array


const mean=(nums)=>{
const ans=nums.reduce((acc,currEle)=>{
     return acc+=currEle
},0)
  return nums.length===0?0:ans/nums.length
}

console.log(mean([1,2,3,4,5,6]))

console.log(mean([-1,0,1]))
console.log(mean([]))