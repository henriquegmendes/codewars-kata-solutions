// Task
// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
// Good luck!

// inverter o array --- s.reverse()
// inverter as palavras --- usar o map / split / reverse / join
// montar um novo array no mesmo tamanho do array original --- usar forEach / push / slice

function ultimateReverse(s) {
  console.log(s);
  const array = s.slice(0);
  array.reverse();
  console.log('s', s);
  const invertedStr = array.map(n => n.split('').reverse().join('')).join('');
  const result = [];
  let x = 0;
  s.forEach((element) => {
    result.push(invertedStr.slice(x, x + element.length));
    x += element.length;
    console.log(x, result);
  });
  return result;
}

console.log(ultimateReverse(['I', 'like', 'big', 'butts', 'and', 'I', 'cannot', 'lie!']));
