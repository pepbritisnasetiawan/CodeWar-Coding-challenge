/* WPU Coding Challenge 2024
9/366

Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"] */

const stringToArray = (string) => string.split(' ');

console.log(stringToArray('I love arrays they are my favorite'));
