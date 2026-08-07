//  Sum of square of element of Array

const SquareSum=(num)=>{
const square=num.map((currEle,index)=>(
    currEle*=currEle
))
return square.reduce((acc,currEle)=>{
    return acc+=currEle
},0)

}


console.log(SquareSum([1,2,3]))