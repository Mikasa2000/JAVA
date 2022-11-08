function ListNode(x){
  this.val = x;
  this.next = null;
}

function deleteList(head) {
  if(head == null) return null;
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let cur = dummyNode;

  while(cur.next != null && cur.next.next != null) {
    if(cur.next.val == cur.next.next.val) {
      let temp = cur.next.val;
      while(cur.next != null && cur.next.val == temp) {
        cur.next = cur.next.next;
      }
    }else {
      cur = cur.next;
    }
  }
  return dummyNode.next;
}