// INTRODUCTION
// The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

// Every given word has a doubled letter, like 'tt' in lettuce.

// To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.

// It will be given only words with one doubled letter.


// EXAMPLE
// Lettuce is the given word. 't' is the doubled letter and it's position is 20 in the alphabet.

// The answer to the Club Doorman is 20 * 3 = 60


// TASK
// The function passTheDoorMan with a given string word shall return the right number. 96

function passTheDoorMan(word) {
  const result = [];
  const array = word.split('');
  array.forEach((element, idx) => {
    if (element === array[idx + 1]) {
      result.push(element);
    }
  });
  return (result[0].charCodeAt(0) - 96) * 3;
}

console.log(passTheDoorMan('lettuce'));
