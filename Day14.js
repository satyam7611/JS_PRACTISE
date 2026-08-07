//  Power of two

const isPowerTwo=(n)=>{
    return n>0 &&(n &(n-1))===0
}

console.log(isPowerTwo(2))
console.log(isPowerTwo(8))
console.log(isPowerTwo(7))
console.log(isPowerTwo(1))
console.log(isPowerTwo(0))