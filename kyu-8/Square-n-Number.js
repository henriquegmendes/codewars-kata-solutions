// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  let result = 0;
  numbers.forEach((number) => {
    result += number ** 2;
  });
  return result;
}

const squareSum2 = numbers => numbers.reduce((result, number) => result + number * number, 0);

console.log(squareSum([1, 2, 3]));
console.log(squareSum2([1, 2, 3]));
