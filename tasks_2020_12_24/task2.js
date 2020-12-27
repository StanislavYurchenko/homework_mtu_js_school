module.exports = (number) => {
  let isPalindrome = true;

  number.toString().split('').some((element, index, array) => {
    if (index > array.length / 2) return true;
    if (element !== array[array.length - 1 - index]) {
      isPalindrome = false;
      return true;
    }
  });

  return isPalindrome;
}



