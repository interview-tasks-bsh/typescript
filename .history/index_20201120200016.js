function run(num){
  const stringArr = (num+='').split('');
  return stringArr.reduce((prev, str) => {
    const num = parseInt(str);
    return prev+num;
  })
}


run(10);
