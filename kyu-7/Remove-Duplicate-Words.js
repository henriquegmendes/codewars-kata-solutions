// Your task is to remove all duplicate words from string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords(s) {
  const result = [];
  s.split(' ').forEach((element) => {
    if (result.indexOf(element) === -1) {
      result.push(element);
    }
  });
  return result.join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
