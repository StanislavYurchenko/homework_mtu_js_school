module.exports = (number) => { 

  if (typeof number !== 'string') {
    const errorMessage = `Invalid type of argument "${typeof number}" is in the function! Available type is "String"`
    throw new TypeError(errorMessage);
  } 

  const ROMAN_NUMBERS = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
 
  return number
    .toUpperCase()
    .split('')
    .reduce((accumulator, number, index, numbers) => {
      const currentValue = ROMAN_NUMBERS[number];
      const nextValue = ROMAN_NUMBERS[numbers[index + 1]];

      if (!currentValue) {
        const errorMessage = `Invalid character "${number}" is in the function argument! Available symbols: ${Object.keys(ROMAN_NUMBERS)}`
        throw new RangeError(errorMessage);
      }      

      return currentValue >= nextValue || !nextValue
        ? accumulator + currentValue
        : accumulator - currentValue   
    }, 0)
}


