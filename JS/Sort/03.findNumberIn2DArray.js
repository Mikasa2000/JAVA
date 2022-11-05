function findNumberIn2DArray(target, array) {
  // 考虑两个特殊情况
  if(array.length == 0) 
    return false;

  if(array[0].length == 0) 
    return false;
  
  let n = array.length; // 行数
  let m = array[0].length; // 列数

  // 从左下角开始查询
  for(let i = n - 1; j = 0; i >= 0 && j < m) {
    if(target > array[i][j])
      j++;
    if(target < array[i][j])
      i--;
    else 
      return true;
  }
  return false;
}