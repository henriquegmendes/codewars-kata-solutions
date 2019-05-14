/* eslint-disable max-len */
// Split an array of objects into 2 arrays based on truthiness of a provided property. The return value should be an array whose first element is an array of the truthy values, and whose second element is an array of the falsey values.

// Javascript example:

// var obj1 = { prop: true },
//     obj2 = { prop: false };

// split([obj1, obj2], 'prop');
// // [[obj1], [obj2]]
// CoffeeScript example:

// obj1 = { prop: true }
// obj2 = { prop: false }

// split [obj1, obj2], 'prop'
// # [[obj1], [obj2]]

function split(arr, prop) {
  const truth = [];
  const falsey = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][prop]) {
      truth.push(arr[i]);
    } else { falsey.push(arr[i]); }
  }
  return [truth, falsey];
}

function split2(arr, prop) {
  return arr.reduce((acc, elem) => {
    if (elem[prop]) {
      acc[0].push(elem);
    } else {
      acc[1].push(elem);
    }
    return acc;
  }, [[], []]);
}

console.log(split());
console.log(split2());
