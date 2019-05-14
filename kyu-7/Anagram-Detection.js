/* eslint-disable max-len */
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

const isAnagram = (test, original) => {
  const testWord = test.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join();
  const originalWord = original.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join();
  return testWord === originalWord;
};

console.log(isAnagram('foefet', 'toffee'));
