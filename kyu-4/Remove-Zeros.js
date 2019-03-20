/* eslint-disable eqeqeq */
// Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

// For example, the following array

// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// is transformed into

// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

// You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

function removeZeros(array) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] != 0 || array[i] === false) {
      result[result.length] = array[i];
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === 0 || array[j] === '0') {
      result[result.length] = array[j];
    }
  }
  return result;
}

console.log(removeZeros([1, '0', 0, 4, 5, 'OI', 0, 9]));
