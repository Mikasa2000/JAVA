function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while(l <= r) {
    const m = (l + r) / 2;
    if(arr[m] == target) {
      return m;
    }else if(arr[m] > target) {
      // 进入左区间
      r = m - 1;
    }else {
      l = m + 1;
    }
  }
  return -1;
}