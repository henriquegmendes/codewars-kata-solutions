// *************************
// *  Create a frame!      *
// *           __     __   *
// *          /  \~~~/  \  *
// *    ,----(     ..    ) *
// *   /      \__     __/  *
// *  /|         (\  |(    *
// * ^  \  /___\  /\ |     *
// *    |__|   |__|-..     *
// *************************
// Given an array of strings and a character to be used as border, output the frame with the content inside.

// Notes:

// Always keep a space between the input string and the left and right borders.
// The biggest string inside the array should always fit in the frame.
// The input array is never empty.
// Example
// frame(['Create', 'a', 'frame'], '+')

// Output:

// ++++++++++
// + Create +
// + a      +
// + frame  +
// ++++++++++

function frame(text, char) {
  let greaterString = 0;
  let newText = '';
  text.forEach((element) => {
    if (element.length > greaterString) {
      greaterString = element.length;
    }
  });
  newText = text.map((element) => {
    return `${char} ${element} ${' '.repeat(greaterString - element.length)}${char}`;
  });
  newText.unshift(char.repeat(greaterString + 4));
  newText.push(char.repeat(greaterString + 4));
  return newText.join('\n');
}

console.log(frame(['Small', 'Frame'], '~'));
