//              1                        1
//           3     5                     3 
//        7     9    11                  6
//    13    15    17    19               10 
// 21    23    25    27    29            15
//                                       21
                                         28 

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8
//
// 2:  set[last] + 2

function run(rows) {
  const l = getSetLength(rows);
  const set = createSet(l);
}

const arr = Array.from(Array(10), (e,i)=>i+1);
console.log(arr);

function getSetLength(rows) {
  const setRows = Array.from(Array(rows), (e,i)=>i+1);
  const setLength = setRows.reduce((prev, curr) => prev+curr);
  const set = [1];
  for (let i = 1; i == setLength; i++) {
    console.log('hit') ;
  }

}

getSetLength(2);
// row 1
//  1

// row 2
// 1+2=3    3+2=5

// row 3
// 5+2=7    7+2=9     9+2=11

// console.log(run(4));