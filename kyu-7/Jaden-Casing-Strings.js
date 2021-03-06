/* eslint-disable max-len */
/* eslint-disable no-extend-native */
/* eslint-disable func-names */
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Note that the Java version expects a return value of null for an empty string or null.

String.prototype.toJadenCase = function () {
  return this.split(' ').map((e, i)=> e.charAt(0).toUpperCase() + e.slice(1)).join(' ');
};

String.prototype.toJadenCase2 = function () {
  let capString = this[0].toUpperCase();
  for (let i = 0; i < this.length - 1; i += 1) {
    if(this[i] === ' ') {
      capString += this[i + 1].toUpperCase();
    } else {
      capString += this[i + 1];
    }
  }
  return capString;
};

const str = 'henrique guazzelli mendes';
console.log(str.toJadenCase());
