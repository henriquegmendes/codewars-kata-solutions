// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

// Beware: r must be without duplicates.
// Don't mutate the inputs.

function inArray(array1, array2) {
  const result = [];
  array1.forEach((elem) => {
    for (let j = 0; j < array2.length; j += 1) {
      if (array2[j].includes(elem)) {
        result.push(elem);
        break;
      }
    }
  });
  return result.sort();
}

function inArray2(array1, array2) {
  const s2 = array2.join('%');
  return array1.filter(item => s2.includes(item)).sort();
}

console.log(inArray(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']));

console.log(inArray2(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']));
