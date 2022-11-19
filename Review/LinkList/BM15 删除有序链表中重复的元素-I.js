// 删除重复元素
function ListNode(val,next) {
  this.val = val;
  this.next = null;
}
function deleteDuplicates(head) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  // let pre = dummyNode;
  let cur = head;

  while(cur != null && cur.next != null) {
    if(cur.val == cur.next.val) {
      cur.next = cur.next.next;
    }else {
      cur = cur.next;
    }
  }
  return dummyNode.next;
}

function deleteDuplicates2(head) {
  let fast = head;
 
  while(fast.next != null) {
    if(cur.val == cur.next.val) {
      cur.next = cur.next.next;
    }else {
      cur = cur.next;
    }
  }
}