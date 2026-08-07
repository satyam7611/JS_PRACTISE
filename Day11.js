//  Digit Sum

const Digitsum=(num)=>{
    sum=0;
while(num!=0){
    rem=num%10;
    sum+=rem
    num=Math.floor(num/10)
}
return sum;
}

console.log(Digitsum(1235))