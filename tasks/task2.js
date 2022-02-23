// let a = 3;
// let b = 30;

// console.log([a , b]);

// a += b;
// b = a - b;
// a = a - b;

// console.log([a , b]);

let arr = [1,[2,[3,[4,[5]]]]];
const res = arr.flat(Infinity);
console.log({res})