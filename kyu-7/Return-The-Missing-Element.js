/* eslint-disable max-len */
// Fellow code warrior, we need your help! We seem to have lost one of our array elements, and we need your help to retrieve it! Our array, superImportantArray, was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function called getMissingElement that accepts an array of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) // returns 8
// getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ) // returns 3

function getMissingElement(superImportantArray) {
  const newArr = superImportantArray.sort((a, b) => a - b);
  for (let i = 0; i <= newArr.length; i += 1) {
    if (newArr[i] !== i) {
      return i;
    }
  }
  return undefined;
}

function getMissingElement2(superImportantArray) {
  for (let i = 0; i <= 9; i += 1) {
    if (superImportantArray.indexOf(i) === -1) {
      return i;
    }
  }
  return undefined;
}

console.log(getMissingElement([0, 5, 1, 3, 2, 8, 7, 6, 4]));
console.log(getMissingElement2([0, 5, 1, 3, 2, 9, 7, 6, 4]));
