//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

const odd = [];
const even = [];

function run(integers) {

  integers.forEach(num => {
    (num % 2) === 0 ? even.push(num) : odd.push(num);
  });

return odd.length === 1 ? odd[0] : even[0];

}


console.log(run(test));