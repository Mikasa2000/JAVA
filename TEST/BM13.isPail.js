let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        // next: {
        //   val: 10
        // }
      }
    }
  }
}
function isPail(head) {
  let q = head; // 是快指针
  let p = head; // 是慢指针

  while(q != null && q.next != null) {
    q = q.next.next;
    p = p.next;
  }

  if(q != null) { // 当快指针不为null时，证明该链表是奇数个
    p = p.next;
  }
  p = reverse(p);
  console.log(p)
  q = head;
  console.log(q)

  // 反转前后进行对比
  while(p != null) {
    if(q.val != p.val) {
      return false;
    }
    q = q.next;
    p = p.next;
  }
  return true;
}


function reverse(phead) {
  let pre = null; 
  while(phead != null) {
    let temp = phead.next;
    phead.next = pre;
    pre = phead;
    phead = temp;
  }
  return pre;
}

console.log(isPail(head));