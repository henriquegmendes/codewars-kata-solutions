/* eslint-disable max-len */
// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

// For example,

// ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
// [7,70,17]
// Don't worry about bad input, you will always receive a finite list of integers.

const filterLucky = array => array.filter(element => element.toString().includes('7'));

const filterLucky2 = array => array.reduce((acc, element) => {
  if (element.toString().includes('7')) {
    acc.push(element);
  }
  return acc;
}, []);

const filterLucky3 = (array) => {
  const result = [];
  array.forEach((element) => {
    if (element.toString().includes('7')) {
      result.push(element);
    }
  });
  return result;
};

const filterLucky4 = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].toString().includes('7')) {
      result.push(array[i]);
    }
  }
  return result;
};

console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
console.log(filterLucky2([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
console.log(filterLucky3([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
console.log(filterLucky4([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
