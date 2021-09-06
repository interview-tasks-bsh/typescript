function run(num){
  const stringArr = (num+='').split('').map(str => parseInt(str));
  return stringArr.reduce((prev, curr) => {
    return prev + curr;
  })
}


console.log(run(10));