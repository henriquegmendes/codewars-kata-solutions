// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strArr, k) {
  if (strArr === 0 || strArr.length < k || k <= 0) {
    return '';
  }
  let bigStr = '';
  const result = [];
  for (let j = 0; j < strArr.length; j += 1) {
    let str = '';
    if (strArr[j + k - 1] !== undefined) {
      for (let i = j; i < j + k; i += 1) {
        str += strArr[i];
      }
      result.push(str);
    }
  }
  result.forEach((element) => {
    if (element.length > bigStr.length) {
      bigStr = element;
    }
  });
  return bigStr;
}

console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2));
