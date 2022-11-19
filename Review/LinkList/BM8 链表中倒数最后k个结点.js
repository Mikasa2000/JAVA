function FindKthToTail(head, k) {
  let fast = head;
  let slow = head;
  for(let i = 0; i < k; i++) {
    if(fast.next == null) {
      return slow = null;
    }else {
      fast = fast.next;
    }
  }

  while(fast != null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}