/* eslint-disable max-len */
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
  let resultStr = '';
  const string = n.toString();
  for (let i = string.length - 1; i >= 0; i -= 1) {
    resultStr += string[i];
  }
  return n > 0 ? parseInt(resultStr, 10) : -parseInt(resultStr, 10);
}

function reverseNumber2(n) {
  const result = parseInt(n.toString().split('').reverse().join(''), 10);
  return n > 0 ? result : -result;
}

console.log(reverseNumber(-123));
console.log(reverseNumber2(-123));
