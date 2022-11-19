function minNumberDisappeared(nums) {
  let n = nums.length;
  const map = new Map();

  for(let i = 0; i < n; i++) {
    map.set(nums[i], 1);
  }

  let res = 1;
  while(map.has(res)) {
    res++;
  }

  return res;
}

console.log(minNumberDisappeared([-2,3,4,1,5]));