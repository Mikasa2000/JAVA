
/**
 * 
 * @param {*} target 
 * @param {*} nums 
 * target = 7, nums = [2,3,1,2,4,3]
 */
function minSubArrayLen(target, nums) {
  let right = 0;
  let left = 0;
  let res = Number.MAX_VALUE;
  let sum = 0;
  for(right; right < nums.length; right++) {
    sum += nums[right++];
    while(sum >= target) {
      res = Math.min(res, left - right + 1);
      sum -= nums[left++];
    }

  }
  if(res == Number.MAX_VALUE) return 0;
  return res - 1;
}