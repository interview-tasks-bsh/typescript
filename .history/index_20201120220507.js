// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function run(num) {
  const numSet = [];
  while (numSet.length <3) {
    numSet.push(num.splice(0,3));
    console.log(numSet)
  }

  numSet.push(num);
  return `(${(numSet.pop()).join('')}) -`;
}
console.log(run(numbers))