module.exports = (nums, target) => {
  let resultIndex;
  nums.some((el,index) => {
    if (el >= target) {
      resultIndex = index
      return true;
    }
  })

  return resultIndex !== undefined ? resultIndex : nums.length;
}

 

