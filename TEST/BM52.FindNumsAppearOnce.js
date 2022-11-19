function FindNumsAppearOnce(array) {
  const map = new Map();
  const res = new Array();

  for(let i = 0; i < array.length; i++) {
    if(!map.has(array[i])) {
      map.set(array[i], 0);
    }

    map.set(array[i], map.get(array[i]) + 1);
  }

  map.forEach((item, key) => {
    if(item == 1) {
      res.push(key);
    }
  })
  let result = res.sort((a,b) => {
    return a - b
  })
  return result;
}

console.log(FindNumsAppearOnce(
  [1,2,3,3,2,9]))