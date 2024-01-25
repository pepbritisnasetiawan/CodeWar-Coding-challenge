/* Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great' */

/* const smash = (words) => {
  let tmp = '';
  for (let i = 0; i < words.length; i++) {
    tmp += words[i];
    if (i != words.length - 1) tmp += ' ';
  }
  return tmp;
};
 */

const smash = (words) => words.join(' ');
