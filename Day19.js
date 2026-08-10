//  Write a fn to check if the given str start with the substring or not

const check=(str,sub)=>{
    const arr=str.trim().split(" ");
    console.log(arr)
    console.log(arr[0])
        
    
    if(arr[0]===sub){
        return true
    }
    else{
        return false
    }

}

console.log(check("Hello World","Hello"))
console.log(check("Hello World","World"))