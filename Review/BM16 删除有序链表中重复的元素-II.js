function ListNode(val,next) {
  this.val = val;
  this.next = null;
}

// 并且保证给定的节点 val 不是链表中的最后一个节点。
function deleteDuplicates(head) {
  if(head == null) return head;
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let cur = head;
  
  while(cur != null && cur.next != null) {
    if(cur.val == cur.next.val) {
      let temp = cur.val;
      while(cur.next != null && cur.next.val == temp) {
        cur.next = cur.next.next;
      }
    }else {
      cur = cur.next;
    }
  }
  return dummyNode.next;
}