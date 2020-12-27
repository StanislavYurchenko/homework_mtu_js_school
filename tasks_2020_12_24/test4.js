const assert = require("assert");
const resolve = require("./task4.js");

const array1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const array2 = [2, 1, 4, 3, 9, 6];
const array3 = [6, 1, 2];

const resultArray1 = [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19];
const resultArray2 = [6, 1, 2, 2, 2, 3, 3, 4, 7, 9, 19];

assert.deepEqual(resolve(array1, array2), resultArray1);
assert.deepEqual(resolve(array1, array3), resultArray2);


