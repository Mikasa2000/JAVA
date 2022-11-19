function ListNode(val,next) {
  this.val = val;
  this.next = null;
}
function mergeList(head1, head2) {
  let dummyNode = new ListNode(-1);
  let cur = dummyNode;

  while(head1 != null && head2 != null) {
    if(head1.val > head2.val) {
      cur.next = head2;
      head2 = head2.next;
      cur = cur.next;
    }else {
      cur.next = head1;
      head1 = head1.next;
      cur = cur.next
    }
  }

  if(head1 == null) {
    cur.next = head2;
  }

  if(head2 == null) {
    cur.next = head1;
  }

  return dummyNode.next;

}