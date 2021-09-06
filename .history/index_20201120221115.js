// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function run(num) {
  const numSet = [];
  while (numSet.length <2) {
    numSet.push(num.splice(0,3));
  }

  numSet.push(num);
  return `(${(numSet.shift()).join('')}) ${(numSet.shift()).join('')}-${(numSet.shift()).join('')}`;
}
// console.log(run(numbers))

function takeTwo(num) {
  return `(${num.splice(0,3).join('')}) ${num.splice(0,3).join('')}-${num.join('')}`;
}

console.log(takeTwo(numbers));