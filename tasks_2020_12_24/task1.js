module.exports = (number) => {  
  const romanNumbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
 
  return number
    .split('')
    .reduce((acc, el, index, array) => {
      const currentValue = romanNumbers[el];
      const nextValue = romanNumbers[array[index + 1]];
      return currentValue >= nextValue || !nextValue
        ? acc + currentValue
        : acc - currentValue   
    }, 0)
}


