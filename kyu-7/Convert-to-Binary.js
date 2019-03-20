// Task Overview
// Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

function toBinary(n){
  let result = n.toString(2);
  return parseInt(result);
}

function toBinary2(n) {
  let result = []
  while (n > 0) {
    if (n % 2 === 1) {
      result.push(1);
      n = Math.floor(n / 2);
    } else {
      result.push(0);
      n /= 2;
    }
  }
  result = parseInt(result.reverse().join(''));
  return result;
}

console.log(toBinary2(2));