const assert = require("assert");
const resolve = require("./task2.js");

assert.strictEqual(resolve(121), true);
assert.strictEqual(resolve(1771), true);
assert.strictEqual(resolve(1221), true);
assert.strictEqual(resolve(-1221), false);
assert.strictEqual(resolve(123221), false);
assert.strictEqual(resolve(23566), false);



