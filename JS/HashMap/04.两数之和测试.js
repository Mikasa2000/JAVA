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
console.log(twoSum([3, 2, 4], 6));