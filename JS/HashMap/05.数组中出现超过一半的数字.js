function MoreThanHalfNum_Solution(numbers)
{
  // write code here
  const map = new Map();
  const length = Math.floor(numbers.length / 2);
  let arr = [];
  for(let i = 0; i < numbers.length; i++) {
    if(!map.has(numbers[i])) {
      map.set(numbers[i], 0);
    }
    map.set(numbers[i], map.get(numbers[i]) + 1);
     
  }
  // console.log(map)
  // console.log(length);
  map.forEach((val,key) => {
    if(val > length) {
      arr.push(key);
    }
  });
 
 return arr.toString();

}



console.log(MoreThanHalfNum_Solution([10,10,10,10,2,2,2]));
// MoreThanHalfNum_Solution([3,3,3,3,2,2,2])