// 最大平均数
function maxEverage(nums, k) {
  let left = 0;
  let right = 0;
  let curEverage = 0;
  let maxEverage = 0;

  while(right < nums.length) {
    curEverage = curEverage + nums[right];

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