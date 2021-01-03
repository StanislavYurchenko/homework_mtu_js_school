module.exports = (nums, target) => {
  if ( !Array.isArray(nums) || typeof target !== 'number') {
    throw new TypeError('Invalid type of argument is in the function! Available type is "Array"and "Number"');
  } 

  let resultIndex;

  nums.some((element, index) => {
    if ( typeof element !== 'number') {
      throw new TypeError('Invalid type of argument is in the function! Available type is "Number"');
    }

    if (element >= target) {
      resultIndex = index;
      return true;
    }
  })

  return resultIndex ?? nums.length;
}