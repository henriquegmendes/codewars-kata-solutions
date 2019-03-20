// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
  if (num < 10) {
    return 0;
  }
  let newNumArr = num.toString().split('').map(n => parseInt(n, 10));
  let count = 0;
  let arrMult = 1;
  let multTest = 10;
  while (multTest >= 10) {
    for (let i = 0; i < newNumArr.length; i += 1) {
      arrMult *= newNumArr[i];
      multTest = arrMult;
    }
    newNumArr = multTest.toString().split('').map(n => parseInt(n, 10));
    count += 1;
    arrMult = 1;
  }
  return count;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
