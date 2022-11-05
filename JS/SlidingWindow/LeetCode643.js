// 子数组最大平均数

function findMaxAverage(nums, k) {
  let right = 0;
  let left = 0;
  let curEverage = 0;
  let maxEverage = -99999;

  while(right < nums.length) {
    curEverage = curEverage + nums[right];
    // 长度大于k，就要删除最前面的元素
    while(right - left + 1 > k) {
      curEverage = curEverage - nums[left];
      left++;
    }
    
    if(right - left + 1 == k) {
      if(curEverage / k > maxEverage) {
        maxEverage = curEverage / k;
      }
    }
    right++;
  }
  return maxEverage;
}