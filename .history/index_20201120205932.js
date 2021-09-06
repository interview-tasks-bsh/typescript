//              1                        1
//           3     5                     3 
//        7     9    11                  6
//    13    15    17    19               7
// 21    23    25    27    29            12

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function run(rows) {
  const l = getSetlength(rows);
  const set = createSet(l);
}

function getSetlength(rows) {
  if (rows === 1) return 1;
  const set = [1];
  let currentRow = 1;
  while (currentRow != rows) {
    set.push(set[set.length-1] + 2);

  }
  return set;
}
function createSet(length) {

}
// row 1
//  1

// row 2
// 1+2=3    3+2=5

// row 3
// 5+2=7    7+2=9     9+2=11

console.log(run(4));