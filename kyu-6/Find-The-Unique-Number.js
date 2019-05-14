/* eslint-disable consistent-return */
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[0] === sortedArr[1] ? sortedArr[sortedArr.length - 1] : sortedArr[0];
}

function findUniq2(arr) {
  if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
    return arr[0];
  }
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i - 1] !== arr[i] && arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
}

console.log(findUniq([1, 1, 1, 2, 1]));
console.log(findUniq2([1, 1, 1, 2, 1]));
