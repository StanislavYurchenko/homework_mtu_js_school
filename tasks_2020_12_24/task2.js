module.exports = (number) => {
  if (typeof number !== 'number') {
    const errorMessage = `Invalid type of argument "${typeof number}" is in the function! Available type is "Number"`
    throw new TypeError(errorMessage);
  } 

  return number
    .toString()
    .split('')
    .every((element, index, array) => {
    if (index > array.length / 2) return true;
    return element === array[array.length - 1 - index]
  });


}



