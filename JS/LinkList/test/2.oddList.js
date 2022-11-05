function oddEvenList(head) {
  if(head == null) return head;
  let odd = head;
  let even = head.next;
  let evenhead = even;

  while(even != null && even.next != null) { // 偶数指针不为空，继续循环
    odd.next = even.next;// 奇数指针指向偶数指针
    odd = odd.next; // 移动奇数指针
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenhead;
  return head;
}

function oddEvenList2(head) {
  if(head == null) return head;
  let odd = head;
  let even = head.next;
  let evenhead = even;
  while(even != null && even.next != null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenhead;
  return head;
}