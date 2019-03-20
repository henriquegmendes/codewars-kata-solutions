// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  if (str.substr(-ending.length) === ending) {
    return true;
  }
  return false;
}

console.log(solution('abudabi', 'tabi'));