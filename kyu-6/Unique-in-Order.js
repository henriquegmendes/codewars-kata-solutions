/* eslint-disable max-len */
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = (iterable) => {
  const result = [];
  for (let i = 0; i < iterable.length; i += 1) {
    if (iterable[i] !== iterable[i + 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
};

const uniqueInOrder2 = (iterable) => {
  const unique = array => array.reduce((acc, e, idx) => {
    if (e !== array[idx + 1]) {
      acc.push(e);
    }
    return acc;
  }, []);

  return unique([...iterable]);
};

console.log(uniqueInOrder('aaaabbbbaaaacccc'));
console.log(uniqueInOrder2('aaaabbbbaaaacccc'));
