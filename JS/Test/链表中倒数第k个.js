function findKth(head, k) {
  let fast = head;
  let slow = head;

  for(let i = 0; i < k; i++) {
    if(fast != null) {
      fast = fast.next;
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