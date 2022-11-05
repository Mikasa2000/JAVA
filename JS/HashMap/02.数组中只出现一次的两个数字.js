function findNumsApperOnce(arr) {
  const map = new Map();
  const res = new Array();

  // 遍历数组
  for(let i = 0; i < arr.length; i++) {
    // 统计每个数出现的频率
    if(!map.has(arr[i])) {
      map.set(arr[i], 1);
    }else{
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  // 再次遍历数组
  for(let i = 0; i < arr.length; i++) {
    // 找到频率为1的两个数
    if(map.get(arr[i]) == 1) {
      res.push(arr[i]);
    }
  }

  // 整理顺序
  if(res[0] < res[1]) {
    return [res[0], res[1]];
  }else {
    [res[1], res[0]];
  }
}

console.log(findNumsApperOnce([1,2,3,3,2,9]));