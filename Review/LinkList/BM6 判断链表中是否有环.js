function hasCycle(head) {
  if(head == null) return false;
  let fast = head;
  let slow = head;

  while(fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;

    if(fast == slow) {
      return true;
    }
  }
  return false;
}