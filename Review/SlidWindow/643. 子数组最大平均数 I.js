/**
 * 
 * @param {*} nums 
 * @param {*} k 
 * 
 * 输入：nums = [1,12,-5,-6,50,3], k = 4
   输出：12.75
   解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 */

function findMaxAverage(nums, k) {
  let maxAverage = -Number.MAX_VALUE;;
  let left = 0;
  let right = 0;
  let sum = 0;
  while(right < nums.length) {
    sum += nums[right];
    // 不满足某个条件的时候
    while(right - left + 1 > k) {
      sum = sum - nums[left];
      left++;
    }

    if(right - left + 1 == k) {
      if(sum / k > maxAverage) {
        maxAverage = sum / k;
      }
    }
    right++;
  }
  return maxAverage;
}

function findMaxAverage2(nums, k) {

}