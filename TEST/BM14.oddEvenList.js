let head = {
  val: 1,
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
            next: null
          }
        }
      }
    }
  }
}
// 双指针
function oddEvenList(head) {
  if(head == null) {
    return head;
  }

  let even = head.next;
  let odd = head;
  //指向even开头
  let evenhead = even;
  while(even != null && even.next != null) {
    odd.next = even.next; //奇数指针指向偶数指针的next
    odd = odd.next; //移动奇数指针
    even.next = odd.next;
    even = even.next;
  }
  //even整体接在odd后面
  odd.next = evenhead;
  return head;
}

console.log(oddEvenList(head));