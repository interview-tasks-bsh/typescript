function run(num){
  const stringArr = (num+='').split('').map(str => parseInt(str));
  const result = stringArr.reduce((prev, curr) => {
    return prev + curr;
  });
  if (result >= 10) return run(result);
  return result;
}


console.log(run(354623872));