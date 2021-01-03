module.exports = (arr1, arr2) => {
  if ( !Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Invalid type of argument is in the function! Available type is "Array"');
  } 

  const stack1 = [];
  const stack2 = [];

  arr2.forEach(mask => {
    arr1.forEach(element => {
      if (typeof mask !== 'number' || typeof element !== 'number') {
        throw new TypeError('Invalid type of argument is in the array! Available type is "Number"');
      } 

      element === mask && stack1.push(element)
    })
  })

  arr1.forEach(element => !arr2.includes(element) && stack2.push(element));
  stack2.sort((a, b) => a - b);

  return [...stack1, ...stack2];
}

