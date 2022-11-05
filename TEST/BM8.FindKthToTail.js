let pHead = {
  val:1,
  next:{
      val:2,
      next:{
          val:3,
          next:{
            val:4,
            next:{
              val:5,
              next:{
                val:6,
                next:null
              }
            }
          }
      }
  }
}
function FindKthToTail(pHead, k) {
  let fast = pHead;
  let slow = pHead;
  for(let i = 0; i < k; i++) {
    if(fast != null) {
      fast = fast.next;
      //达不到k步说明链表过短，没有倒数k
    }else {
      return slow = null;
    }
  }

  while(fast != null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

console.log(FindKthToTail(pHead,3))