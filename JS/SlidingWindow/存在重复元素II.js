/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
  let right = 0;
  let left = 0;
  const set = new Set();
  while(right < nums.length) {
      if(set.has(nums[right])) {
          return true;
      }
      set.add(nums[right]);
      right++
      while(set.size > k) {
          set.delete(nums[left]);
          left++;
      } 
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));