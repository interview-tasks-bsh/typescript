const test = [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

const odd = [];
const even = [];

function run(arr) {

  arr.forEach(num => {
    num % 2 === 0 ? even.push(num) : odd.push(num);
  });

  odd.length === 1 ? odd[0] : even[0];

}


console.log(run(test));