/* eslint-disable max-len */
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
  const result = text.split(' ').map((element) => {
    const arr = element.split('');
    arr[0] = element.charCodeAt(0);
    if (arr.length >= 3) {
      const temp = arr[1];
      arr[1] = arr[arr.length - 1];
      arr[arr.length - 1] = temp;
    }
    return arr.join('');
  });
  return result.join(' ');
};

console.log(encryptThis('A wise old owl lived in an oak'));
