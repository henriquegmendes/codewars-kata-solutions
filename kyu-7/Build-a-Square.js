/* eslint-disable max-len */
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

// Example: Integer = 3; I expect a 3x3 square back just like below as a string.

// Solution:

// +++
// +++
// +++

function generateShape(int) {
  const array = [];
  let string = '';
  let result = '';
  for (let i = 0; i < int; i += 1) {
    string += '+';
  }
  for (let j = 0; j < int; j += 1) {
    array.push(string);
  }
  result = array.join('\n');
  return result;
}

console.log(generateShape(2));


function generateShape2(int) {
  return (`${'+'.repeat(int)}\n`).repeat(int).slice(0, -1);
}

console.log(generateShape(2));
console.log(generateShape2(2));
