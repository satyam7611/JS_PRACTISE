//  find the minimum element of an array

const minimum=(num)=>{
let min=num[0];
for(let i=0;i<num.length;i++){
    if(min>num[i]){
        min=num[i]
    }
}
return min;

}


console.log(minimum([1,3,-1,5,3,6]))
console.log(minimum([5,10,2,8]))
console.log(minimum([5,-3,0,12,-7]))
console.log(minimum([]))