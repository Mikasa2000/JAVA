function ListNode(val,next) {
  this.val = val;
  this.next = null;
}

function reverseBetween(head, left, right) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let pre = dummyNode;
  let cur = head;

  for(let i = 1; i < left; i++) {
    pre = cur;
    cur = cur.next;
  }

  for(let i = left; i < right; i++) {
    let temp = cur.next;
    cur.next = temp.next;
    temp.next = pre.next;
    pre.next = temp;
  }

  return dummyNode.next;

}