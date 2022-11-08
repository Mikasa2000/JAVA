function removeElement(head) {
  if(head == null) return head;
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let cur = dummyNode;
  while(cur.next != null) {
    if(cur.val == cur.next.val) {
      cur.next = cur.next.next;
    }else {
      cur = cur.next;
    }
    
  }
  return dummyNode.next;
}