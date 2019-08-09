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
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

function remove(s, n) {
  const strArr = s.split('');
  let counter = 0;
  for (let i = 0; i < strArr.length; i += 1) {
    if (n === counter) {
      return strArr.join('');
    }
    if (strArr[i] === '!') {
      strArr[i] = '';
      counter += 1;
    }
  }
  return strArr.join('');
}

function remove2(s, n) {
  let x = s;
  for (let i = 1; i <= n; i += 1) {
    x = x.replace('!', '');
  }
  return x;
}

console.log(remove('!!!Hi!', 3));
console.log(remove2('Hi!', 1));
