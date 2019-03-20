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

function remove(s, n) {
  let newWord = s;
  let x = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (x === n) {
      return newWord;
    }
    if (s.charAt(i) === '!') {
      newWord = newWord.replace('!', '');
      x += 1;
    }
  }
  return newWord;
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
