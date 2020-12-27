module.exports = (str) => {
  const stack = [];
  const openedBrackets = ['{', '[', '('];
  const closedBrackets = ['}', ']', ')'];
  let isBracketsPair = true;  
  
  str
    .split('')
    .some(element => {  
      if (openedBrackets.includes(element)) {
          stack.push(element);
      } else if (closedBrackets.includes(element)) {
        if (openedBrackets.indexOf(stack.pop()) !== closedBrackets.indexOf(element)) {
          isBracketsPair = false;
          return true;
        };
      }
    });
  
  return stack.length === 0 && isBracketsPair;
}


