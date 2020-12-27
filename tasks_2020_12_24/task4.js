module.exports = (arr1, arr2) => {
  const stack1 = [];
  const stack2 = [];

  arr2.forEach(mask => {
    arr1.forEach(el => el === mask && stack1.push(el))
  })

  arr1.forEach(el => !arr2.includes(el) && stack2.push(el));
  stack2.sort((a, b) => a - b);

  return [...stack1, ...stack2];
}

