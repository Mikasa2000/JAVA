/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k == 1)
    return 0
  nums.sort((a, b) => a - b)
  let ans = 100005
  for (let i = 0; i <= nums.length - k; i++)
    ans = Math.min(ans, nums[i + k - 1] - nums[i])
  return ans
};

console.log(minimumDifference([9,4,1,7], 2));
