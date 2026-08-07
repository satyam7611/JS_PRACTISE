//  Lowercase count

const VowelCount=(str)=>{
const newArr=['a','e','i','o','u']
const arr=str.toLowerCase().split("");
console.log(arr)
count=0
for(let i=0;i<arr.length;i++){
    if(newArr.includes(arr[i])){
count+=1
    }
}
return count

}

console.log(VowelCount("Helloo world"))
console.log(VowelCount("ThE quIck brOwn fOx"))
console.log(VowelCount("brrrp"))