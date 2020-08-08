import { type } from "os";

// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

const solve = s => Math.max(...s.match(/[0-9]+/g));

const numberSequenceCheck = (subString, array) => {
  let numbers = '';
  for (let i = 0; i < subString.length; i += 1) {
    if (subString.charCodeAt(i) >= 48 && subString.charCodeAt(i) <= 57) {
      numbers += subString[i];
    } else {
      break;
    }
  }
  array.push(numbers);
};

const solve = (s) => {
  const result = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      numberSequenceCheck(s.slice(i), result);
    }
  }
  return Math.max(...result);
};

console.log(solve('gh12cdy695m1'));
