// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  let x = str.length - 1;
  for (let i = ending.length - 1; i >= 0; i -= 1) {
    if (ending[i] !== str[x]) {
      return false;
    }
    x -= 1;
  }
  return true;
}


function solution1(str, ending) {
  if (str.substr(-ending.length) === ending) {
    return true;
  }
  return false;
}

function solution2(str, ending) {
  return str.endsWith(ending);
}

function solution3(str, ending) {
  const sliceStr = str.slice(-ending.length);
  return sliceStr === ending;
}

console.log(solution('abudabi', 'tabi'));
console.log(solution1('abudabi', 'tabi'));
console.log(solution2('abudabi', 'tabi'));
console.log(solution3('abudabi', 'tabi'));
