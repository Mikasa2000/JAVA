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
var isPalindrome = function(head) {
  // 定义快慢指针
  let q = head;
  let s = head;

  while(q != null && q.next != null) {
      q = q.next.next;
      s = s.next;
  }

  // 如果是奇数的情况
  if(q != null) {
      s = s.next;
  }
  // 反转
  s = reverseList(s);
  q = head; // 让q指回头部

  while(s != null) { // slow会向后移动直到null
      if(q.val != s.val) {
          return false;
      }
      q = q.next;
      s = s.next;
  }
  return true;

};

function reverseList(pHead) {
  let temp = null;
  let pre = null;
  while(pHead != null) {
      temp = pHead.next;
      pHead.next = pre;
      pre = pHead;
      pHead = temp;
  }
  return pre;
}

console.log(isPalindrome(head));