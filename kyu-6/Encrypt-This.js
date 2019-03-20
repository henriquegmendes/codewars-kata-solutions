// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = (text) => {
  const array = text.split(' ');
  const result = array.map((element) => {
    const el = element.split('');
    if (el.length >= 3) {
      const temp = el[1];
      el[1] = el[el.length - 1];
      el[el.length - 1] = temp;
    }
    if (el[0]) {
      el[0] = el[0].charCodeAt(0);
    }
    return el.join('');
  });
  return result.join(' ');
};

console.log(encryptThis('A wise old owl lived in an oak'));
