function threeSum(nums) {
  const res = [], len = nums.length
  nums.sort((a, b) => a - b);

  for(let i = 0; i < len; i++) {
    // 定义左指针和右指针
    let l = i + 1, r = len - 1, iNum = nums[i];
    // 数组排过序，如果第一个数大于0直接返回res
    if(iNum > 0) return res;

    // a去重（结果集去重）
    if(i > 0 && iNum == nums[i - 1]) continue; // 剪枝

    while(l < r) {
      let lNum = nums[l], rNum = nums[r], threeSum = iNum + lNum + rNum;
      if(threeSum < 0) l++;
      else if(threeSum > 0) r--;
      else {
        res.push([iNum, lNum, rNum]);
        // 去重
        while(l < r && nums[l] == nums[l + 1]) {
          l++;
        }

        while(l < r && nums[r] == nums[r - 1]) {
          r--;
        }
        // l和r同时向中间移动
        l++;
        r--;
      }

    }
  }
  return res;
}

console.log(threeSum([-1,0,1,2,-1,-4]))