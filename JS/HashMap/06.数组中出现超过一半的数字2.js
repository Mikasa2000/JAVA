function findNumsApperOnce(arr) {
    const map = new Map();
    for(let i = 0; i < arr.length; i++) {
      if(!map.has(arr[i])) {
        map.set(arr[i], 1);
      }else {
        map.set(arr[i], map.get(arr[i]) + 1);
      }

      // 一旦有长度大于一半的即可返回
      if(map.get(arr[i]) > arr.length / 2) {
        return arr[i];
      }

    }
    return 0;
}