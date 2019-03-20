// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

// eslint-disable-next-line no-extend-native
String.prototype.camelCase = () => {
  const array = this.trim().split(' ');
  const result = [];
  if (this.length === 0) {
    return '';
  }
  array.forEach((element) => {
    result.push(element[0].toUpperCase() + element.substring(1));
  });
  return result.join('');
};

console.log('to upper case'.camelCase());
