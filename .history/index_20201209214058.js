// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// 40 (XL) and 90 (XC), as well as 400 (CD) and 900 (CM)
function solution(roman) {
  const romanMap = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  }

  function romanToNumber(roman) {
    return roman.map(i => romanMap[i]);
  }

  const r = roman.split("");
  const number = romanToNumber(r);
  console.log(number);
  return number.reduce((prev, curr, index) => {

    if (index > 0 && r[index - 1] === 1 && [5, 10].includes(curr)) {
      return prev - r[index - 1] + curr - r[index - 1];
    }

    if (index > 0 && r[index - 1] === 10 && [50, 100].includes(curr)) {
      return prev - r[index - 1] + curr - r[index - 1];
    }

    console.log(index > 0 && r[index - 1] === 100 && [500, 1000].includes(curr));
    if (index > 0 && r[index - 1] === 100 && [500, 1000].includes(curr)) {
      console.log (prev, r[index-1], curr, r[index-1]);
      return prev - r[index - 1] + curr - r[index - 1];
    }

    return prev + curr;
  }, 0);
}

console.log(solution('cd'));
