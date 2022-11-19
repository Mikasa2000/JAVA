// [1,2,3,2,2,2,5,4,2]
function MoreThanHalfNum_Solution(nums) {
  // Math.floor() 向下取整
  const size = Math.floor(nums.length / 2);
  const map = new Map();
  let arr = [];

  for(let i = 0; i < nums.length; i++) {
    if(!map.has(nums[i])) {
      map.set(nums[i], 0);
    }

    map.set(nums[i], map.get(nums[i]) + 1);
  }

  /**
   * 对map进行forEach循环
   * (item, index)
   * 
   */
  map.forEach((item, index) => {
    // console.log(item);
   
    if(item > size) {
      arr.push(index);
    }
  })

  return arr.join("");
  // return arr.toString();
}

console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]))