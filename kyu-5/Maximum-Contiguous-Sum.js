// Given an unsorted array of integer values, find the maximum positive sum of any contiguous range within the array.

// An array containing only negative values can return 0. Your solution should be efficient enough to not throw a timeout exception.

// Example:
// maxContiguousSum([3, -4, 8, 7, -10, 19, -3]); // returns 24
// maxContiguousSum([-8, -10, -12, -2, -3, 5]); // returns 5
// Visual example:
// [3, -4, 8, 7, -10, 19, -3]
//        |_____________|
//              ||
//              \/
//              24

function maxContiguousSum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const array = arr;
  const result = [];
  for (let i = 0; i <= array.length - 1; i += 1) {
    let sum = array[i];
    for (let j = i + 1; j <= array.length; j += 1) {
      result.push(array[i]);
      if (Number.isInteger(array[j])) {
        sum += array[j];
        result.push(sum);
      }
    }
  }
  return result.sort((a, b) => a - b)[result.length - 1] >= 0 ? result.sort((a, b) => a - b)[result.length - 1] : 0;
}

console.log(maxContiguousSum([3, 4, -3, 2, -9, -9, -4, -2, 32]));
