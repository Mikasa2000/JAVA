function twoSum(numbers, target) {
  const map = new Map();
  for(let i = 0; i < numbers.length; i++) {
    if(map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]), i];
    }

    map.set(numbers[i], i);
  }
  return [];
}


function twoSums(nums, target) {
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
    if(map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
}