function run(num){
  const stringArr = (num+='').split('');
  return stringArr.reduce((prev, str) => {
    const num1 = parseInt(str);
    const num2 = parseInt(prev);
    return num2+num;
  })
}


console.log(run(10));
