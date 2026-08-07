//  Arrays Are Equal

const ArrayEqual=(nums1,nums2)=>{
 if(nums1.length!=nums2.length) return false
//  for(let i=0;i<nums1.length;i++){
//     if(nums1[i]!==nums2[i]){
//         return false
//     }
//  }
//  return true

 return nums1.every((currEle,index)=>currEle===nums2[index])
}


console.log(ArrayEqual([1,2,3],[1,2,3]))
console.log(ArrayEqual([1,2,3],[1,2,]))
console.log(ArrayEqual([1,2,3,5,4],[1,2,3,4,5]))
console.log(ArrayEqual([],[]))