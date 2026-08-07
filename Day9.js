const Average=(num)=>{
    sum=0
  let total=num.reduce((acc,currEle)=>{
    acc+=currEle
    return acc;
  },0)
  avg=total/num.length;
  return avg
}

console.log(Average([5,10,2,8]))