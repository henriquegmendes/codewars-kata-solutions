// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr) {
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

console.log(maxSequence([3, 4, -3, 2, -9, -9, -4, -2, 32]));
