// Your task is to remove all duplicate words from string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords(s) {
  let x = [];
  const y = s.split(' ');
  for (let i = 0; i < y.length; i += 1) {
    if (x.indexOf(y[i]) === -1) {
      x.push(y[i]);
    }
  }
  x = x.join(' ');
  return x;
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
