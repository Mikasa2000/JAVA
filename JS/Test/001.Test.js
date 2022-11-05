function setMinLength(target, nums) {
  let left = 0;
  let right = 0;
  let curSum = 0;
  let minLength = 0;

  while(right < nums.length) {
    curSum = curSum + nums[right];
    while(curSum >= target) {
      if(right - left + 1 < minLength || minLength == 0) {
        minLength = right - left + 1;
      }
      curSum = curSum - nums[left];
      left++;
    }
    right++;
  }
  return minLength;
}



let str = "abcd";
console.log(str.charAt(0));