/**
 * 
 * 输入：target = 7, nums = [2,3,1,2,4,3]
  输出：2
  解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * 
 */

function minSubArrayLen(target, nums) {
  let left = 0;
  let right = 0;
  let curSum = 0; // 滑动窗口
  let minLength = 0;


  while(right < nums.length) {
    curSum = curSum + nums[right]; 
    while(curSum >= target) { // d
      // 特殊情况
      // 1.当前的长度小于了之前记录的最小的长度；
      // 2.当前长度为0；
      if(right - left + 1 < minLength || minLength == 0) { // 这里求数组的长度需要+1
          minLength = right - left + 1;
      }
      // 当前数组的和在左指针标注下的值
      curSum = curSum - nums[left];
      left++;
    }
    right++;
  }
  return minLength;
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));