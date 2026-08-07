//  Factorial  Finder

const Factorial=(num)=>{
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact;
}

console.log(Factorial(5))
console.log(Factorial(0))
console.log(Factorial(2))