let pHead = {
  val:10,
  next:{
      val:2,
      next:{
          val:31,
          next:{
            val:-4,
            next:{
              val:15,
              next:{
                val:11,
                next:null
              }
            }
          }
      }
  }
}
// 1. 转化成数组
function sortInList(head) {
  const nums = new Array();
  let p = head;
  while( p != null ) {
    nums.push(p.val);
    p = p.next;
  }
  p = head;
  let result = nums.sort((a, b) => {
    return a - b;
  })
  for(let i = 0; i < result.length; i++) {
    p.val = result[i] == undefined ? null : result[i];
    p = p.next;
  }
  return head;
}
console.log(sortInList(pHead));