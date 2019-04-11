// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name) {
  let result = `${name[0]}.`;
  for (let i = 0; i < name.length; i += 1) {
    if (name[i] === ' ') {
      result += name[i + 1];
      break;
    }
  }
  return result.toUpperCase();
}

console.log(abbrevName('Henrique Mendes'));
