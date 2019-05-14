/* eslint-disable max-len */
// You are given three non negative integers a, b and n, and making an infinite sequence just like fibonacci sequence, use the following rules:

// step 1: use ab as the initial sequence.
// step 2: calculate the sum of the last two digits of the sequence, and append it to the end of sequence.
// repeat step 2 until you have enough digits
// Your task is to complete the function which returns the nth digit (0-based) of the sequence.

// Notes:
// 0 <= a, b <= 9, 0 <= n <= 10^10
// 16 fixed testcases
// 100 random testcases, testing for correctness of solution
// 100 random testcases, testing for performance of code
// All inputs are valid.
// Pay attention to code performance.
// Examples
// For a = 7, b = 8 and n = 9 the output should be 5, because the sequence is:

// 78 -> 7815 -> 78156 -> 7815611 -> 78156112 -> 781561123 -> 7815611235 -> ...
// and the 9th digit of the sequence is 5.

// For a = 0, b = 0 and n = 100000000 the output should be 0, because all the digits in this sequence are 0.

function find(a, b, n) {
  if (a === 0 && b === 0) {
    return 0;
  }
  let sequence = `${a}${b}`;
  const newN = +`${n}`.slice(-4);
  for (let i = 1; i <= newN; i += 1) {
    sequence += +sequence[sequence.length - 1] + +sequence[sequence.length - 2];
  }
  return parseInt(sequence[newN], 10);
}

function find2(a, b, n) {
  if (a === 0 && b === 0) {
    return 0;
  }
  const sequence = [a, b];
  const newN = +`${n}`.slice(-4);
  if (n <= 1) {
    return sequence[n];
  }
  for (let i = 2; i <= newN; i += 1) {
    if (sequence[sequence.length - 1] + sequence[sequence.length - 2] < 10) {
      sequence[i] = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    } else {
      const temp = (sequence[sequence.length - 1] + sequence[sequence.length - 2]);
      sequence[i] = 1;
      sequence[i + 1] = temp - 10;
      i += 1;
    }
  }
  return sequence[newN];
}

function find3(a, b, n) {
  if (a === 0 && b === 0) {
    return 0;
  }
  const sequence = {
    0: a,
    1: b,
  };
  const newN = +`${n}`.slice(-4);
  for (let i = 2; i <= newN; i += 1) {
    if (sequence[i - 1] + sequence[i - 2] < 10) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    } else {
      const temp = (sequence[i - 1] + sequence[i - 2]);
      sequence[i] = 1;
      sequence[i + 1] = temp - 10;
      i += 1;
    }
  }
  return sequence[newN];
}

console.log(find(7, 8, 9));
console.log(find2(7, 8, 9));
console.log(find3(7, 8, 9));
