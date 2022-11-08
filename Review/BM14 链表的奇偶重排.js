function oddEvenList(head) {
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