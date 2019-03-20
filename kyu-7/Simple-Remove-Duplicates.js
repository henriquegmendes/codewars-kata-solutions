// For example:
// solve([3,4,4,3,6,3]) = [4,6,3]

// -- remove the 3 in index 0 and index 3
// -- remove the 4 in index 1

function solve(arr) {
  const newArr = arr.reverse();
  let result = [];
  for (let i = 0; i <= newArr.length - 1; i += 1) {
    if (result.indexOf(newArr[i]) === -1) {
      result.push(newArr[i]);
    }
  }
  result = result.reverse();
  return result;
}

solve([2, 3, 3, 5, 4, 6, 5, 8]);
