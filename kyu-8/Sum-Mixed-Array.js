/* eslint-disable max-len */
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  let result = 0;
  for (let i = 0; i < x.length; i += 1) {
    result += parseInt(x[i], 10);
  }
  return result;
}

console.log(sumMix([1, 2, 4, '5', '10', 5, '9']));
