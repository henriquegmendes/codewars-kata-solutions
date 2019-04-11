/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

const findSmallestInt = (args) => {
  let smallestNum = args[0];
  for (let i = 1; i < args.length; i += 1) {
    if (args[i] < smallestNum) {
      smallestNum = args[i];
    }
  }
  return smallestNum;
};

const findSmallestInt1 = args => args.reduce((acc, item) => {
  if (acc > item) {
    acc = item;
  }
  return acc;
}, args[0]);

const findSmallestInt2 = args => args.sort((a, b) => a - b)[0];

const findSmallestInt3 = args => args.reduce((acc, item) => (acc > item ? acc = item : acc), args[0]);

console.log(findSmallestInt([34, 15, 88, 2]));
console.log(findSmallestInt1([34, 15, 88, 2]));
console.log(findSmallestInt2([34, -345, -1, 100]));
console.log(findSmallestInt3([34, 15, 88, 2]));
