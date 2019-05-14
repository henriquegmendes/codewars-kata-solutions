/* eslint-disable max-len */
// And here is Fibonacci again. This time we want to go one step further. Our fib() function must be faster! Can you do it?

// In case you don't know, what the Fibonacci number is:

// The nth Fibonacci number is defined by the sum of the two previous Fibonacci numbers. In our case: fib(1) == 0 and fib(2) == 1. With these initial values you should be able to calculate each following Fibonacci number.

// Examples:

// fib(1) // === 0
// fib(2) // === 1
// fib(3) // === 1
// fib(4) // === 2
// fib(5) // === 3

function fib(n) {
  const sequence = [0, 1];
  if (n <= 1) {
    return sequence[n - 1];
  }
  for (let i = 2; i <= n; i += 1) {
    sequence[i] = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  }
  return sequence[n - 1];
}

function fib2(n) {
  let num1 = 0;
  let num2 = 1;
  let newNum;
  if (n === 1) {
    return num1;
  }
  if (n === 2) {
    return num2;
  }
  for (let i = 0; i < n - 2; i += 1) {
    newNum = num1 + num2;
    num1 = num2;
    num2 = newNum;
  }
  return newNum;
}

console.log(fib(10));
console.log(fib2(10));
