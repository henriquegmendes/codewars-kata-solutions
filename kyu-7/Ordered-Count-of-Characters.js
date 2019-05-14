/* eslint-disable max-len */
// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = (text) => {
  const obj = {};
  for (let i = 0; i < text.length; i += 1) {
    obj[text[i]] = obj[text[i]] + 1 || 1;
  }
  return Object.keys(obj).map(e => [e, obj[e]]);
};

console.log(orderedCount('abracadabra'));
