/* 
WPU Coding Challenge 2024
8/366
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
Input will always be valid, i.e. no negative integers.
*/

/* const countSheep = (num) => {
    let result = ''
    for (let i = 1; i <= num; i++) {
        result += `${i} shseep...`;
    }
    return result;
} */

const countSheep = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

console.log(countSheep(4));
