// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  const newArr1 = arr1.filter(el => arr2.includes(el));
  let counter = 0;
  arr2.forEach((el) => {
    for (let j = 0; j < newArr1.length; j += 1) {
      if (el === newArr1[j]) {
        counter += 1;
        newArr1.splice(j, 1);
        break;
      }
    }
  });
  if (counter === str2.length) {
    return true;
  }
  return false;
}

console.log(scramble('cedewaraaossoqqyt', 'codewars'));

function scramble1(str1, str2) {
  const str1Count = {};
  const str2Count = {};
  for (let i = 0; i < str1.length; i += 1) {
    str1Count[str1[i]] = (str1Count[str1[i]] || 0) + 1;
    str2Count[str1[i]] = 0;
  }
  // console.log('STRING 1 COUNT ===>', str1Count)
  // console.log('STRING 2 COUNT ===>', str2Count)

  for (let i = 0; i < str2.length; i += 1) {
    str2Count[str2[i]] = (str2Count[str2[i]] || 0) + 1;
    if (str2Count[str2[i]] > (str1Count[str2[i]] || 0)) {
      return false;
    }
  }
  // console.log('STRING 1 COUNT ===>', str1Count)
  // console.log('STRING 2 COUNT ===>', str2Count)
  return true;
}

console.log(scramble1('cedewaraaossoqqyt', 'ccccccccodewars'));
