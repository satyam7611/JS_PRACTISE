//  Write a funtion to reverese a string


const reverse=(str)=>{
arr=str.trim().split("")
console.log(arr)
 revStr=""
 for(let i=arr.length-1;i>=0;i--){
    revStr+=arr[i]
 }
 console.log(revStr)
}

console.log(reverse("Hello"))
console.log(reverse("Satyam Singh"))