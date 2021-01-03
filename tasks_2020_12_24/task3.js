module.exports = (str) => {
  if (typeof str !== 'string') {
    const errorMessage = `Invalid type of argument "${typeof str}" is in the function! Available type is "String"`
    throw new TypeError(errorMessage);
  } 

  const OPENED_BRACKETS = ['{', '[', '('];
  const CLOSED_BRACKETS = ['}', ']', ')'];

  const stack = [];
  let isBracketsPair = true;  
  
  str
    .split('')
    .forEach(element => {  
      console.log(element);
      if (OPENED_BRACKETS.includes(element)) {
          stack.push(element);
      } else if (CLOSED_BRACKETS.includes(element)) {
        if (OPENED_BRACKETS.indexOf(stack.pop()) !== CLOSED_BRACKETS.indexOf(element)) {
          isBracketsPair = false;
        };
      } else {
        const errorMessage = `Unacceptable argument "${element}". The argument can only contain "${OPENED_BRACKETS},${CLOSED_BRACKETS}"`
        throw new Error(errorMessage);
      }
    });
  
  return stack.length === 0 && isBracketsPair;

}


