function isPail(head) {
  if(head == null) return false;
  let fast = head;
  let slow = head;
  while(fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if(fast != null) {
    slow = slow.next;
  }

  slow = reverseList(slow);
  fast = head;

  while(slow != null) {
    if(slow.val != fast.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }
  return true;
}

function reverseList(pHead) {
  let pre = null;
  while(pHead != null) {
    let temp = pHead.next;
    pHead.next = pre;
    pre = pHead;
    pHead = temp;
  }
  return pre;
}