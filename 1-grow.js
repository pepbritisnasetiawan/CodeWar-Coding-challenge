/* function grow(x) {
    let result = x[0];
    for (let i = 1; i < x.length; i++) {
        result *= x[i];
    }
    return result;
}

console.log(grow([1,2,3,4])); */

// reduce menerima

const grow = (x) =>
  x.reduce((accumulator, currentValue) => accumulator * currentValue);

console.log(grow([2, 2, 2, 2, 2, 2]));
