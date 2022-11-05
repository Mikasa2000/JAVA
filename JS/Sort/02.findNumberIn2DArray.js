function findNumberIn2DArray(matrix, target) {
  // 确定左下角的元素

  let i = array.length - 1, j = 0;
  while( i >= 0 && j < array[0].length) {
      if(target > array[i][j]) {
          j++;
      }else if(target < array[i][j]) {
          i--;
      }else {
          return true;
      }
  }
  return false;
}