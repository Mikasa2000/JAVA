function twoSum(numbers, target) {
  const map = new Map();
  for(let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], i);
    console.log(map);
  }

  for(let i = 0; i < numbers.length; i++) {
    if(map.has(target - numbers[i])) {
      // return [map.get(i), target - map.get(i)];
      return [i, map.get(target - numbers[i])];
    }
  }
  return [];
}

console.log(twoSum([3,2,4], 6))