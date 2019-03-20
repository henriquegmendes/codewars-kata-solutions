// Background
// We all know about "balancing parentheses" (plus brackets, braces and chevrons) and even balancing characters that are identical.

// Read that last sentence again, I balanced different characters and identical characters twice and you didn't even notice... :)

// Kata
// Your challenge in this kata is to write a piece of code to validate that a supplied string is balanced.

// You must determine if all that is open is then closed, and nothing is closed which is not already open!

// You will be given a string to validate, and a second string, where each pair of characters defines an opening and closing sequence that needs balancing.

// You may assume that the second string always has an even number of characters.

// Example
// // In this case '(' opens a section, and ')' closes a section
// isBalanced("(Sensei says yes!)", "()")       // => True
// isBalanced("(Sensei says no!", "()")         // => False

// // In this case '(' and '[' open a section, while ')' and ']' close a section
// isBalanced("(Sensei [says] yes!)", "()[]")   // => True
// isBalanced("(Sensei [says) no!]", "()[]")    // => False

// // In this case a single quote (') both opens and closes a section
// isBalanced("Sensei says 'yes'!", "''")       // => True
// isBalanced("Sensei say's no!", "''")         // => False

function isBalanced(s, caps) {
  let newStr = '';
  const stack = [];
  const arr = [...caps];
  const struct = arr.reduce((acc, item, idx) => {
    if (idx % 2 === 0) {
      acc[item] = arr[idx + 1];
    }
    return acc;
  }, {});
  for (let i = 0; i < s.length; i += 1) {
    if (caps.indexOf(s[i]) !== -1) {
      newStr += s[i];
    }
  }

  if (newStr.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < newStr.length; i += 1) {
    if (Object.keys(struct).includes(newStr[i])) {
      stack.push(newStr[i]);
    } if (newStr[i] === struct[stack[stack.length - 1]]) {
      stack.pop();
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
}

console.log(isBalanced('(Sensei [says] yes!)', '()[]'));
