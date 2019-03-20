// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let x = s;
  for (let i = 0; i < s.length; i += 1) {
    x = x.replace('!', '');
  }
  return s;
}

removeExclamationMarks();
