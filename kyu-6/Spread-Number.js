/* eslint-disable no-extend-native */
/* eslint-disable func-names */
/* eslint-disable linebreak-style */
// Task

// It would be cool if we could create arrays filled by numbers from 1 to n like this arr = [...n].

// Your task is to do something with Number to make it possible.

// In your code you shouldn't do anything else, only modify Number.

// Example
// [...1] => [1]

// [...2] => [1, 2]

// [...3] => [1, 2, 3]

// [...4] => [1, 2, 3, 4]

// [...5] => [1, 2, 3, 4, 5]

Number.prototype[Symbol.iterator] = function* () {
  for (let i = 1; i <= this.valueOf(); i += 1) {
    yield i;
  }
};
