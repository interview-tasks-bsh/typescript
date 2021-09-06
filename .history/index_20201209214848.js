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
  function romanToNumber(roman.toLowerCase()) {
    return roman.map(i => romanMap[i]);
  }

}

console.log(solution('MXM'));
