// Given an array of integers.

// Return an array, where the first element is the count of positives numbers
// and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  let countOfPositives = 0;
  let sumOfNegatives = 0;

  for (let i = 0; i < input.length; i += 1) {
    if (input[i] > 0) {
      countOfPositives += 1;
    } else {
      sumOfNegatives += input[i];
    }
  }
  return [countOfPositives, sumOfNegatives];
}


function countPositivesSumNegatives2(input) {
  let positives = 0;
  let negatives = 0;
  if (!input || input.length === 0) return [];
  input.forEach((number) => {
    if (number > 0) {
      positives += 1;
    } else {
      negatives += number;
    }
  });
  return [positives, negatives];
}

console.log(countPositivesSumNegatives([2, 2, 2, -1, -2, -10]));
console.log(countPositivesSumNegatives2([2, 2, 2, -1, -2, -10]));
