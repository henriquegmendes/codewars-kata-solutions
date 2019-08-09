// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

function removeExclamationMarks(string) {
  let result = string;
  for (let i = 0; i < result.length; i += 1) {
    if (result.includes('!')) {
      result = result.replace('!', '');
    } else {
      break;
    }
  }
  return result;
}

const removeExclamationMarks2 = (string) => {
  const array = string.split('');
  array.forEach((element, index) => {
    if (element === '!') {
      array[index] = '';
    }
  });
  return array.join('');
};

console.log(removeExclamationMarks());
console.log(removeExclamationMarks2());
