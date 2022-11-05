// 栈
function reverseListWithStack(head) {
  let stack = new Array();
  if(head == null) return head;

  while(head.next != null) {
    stack.push(head);
    head = head.next;
  }

  let headNode = stack.pop();
  let cur = headNode;

  while(stack.length > 0) {
    cur.next = stack.pop();
    cur = cur.next;
    cur.next = null;
  }
  return headNode;
}

// 头指针（双指针）
function reverseListWithPoint(head) {
  let prev = null;
  let cur = head;
  let temp = null;

  if(head == null) return head;
  while(head != null && head.next != null) {
    temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}

// 递归
function reverseListWithRecursion(head) {
  if(head == null || head.next == null) {
    return head;
  }else {
    const newNode = reverseListWithRecursion(head.next);
    head.next.next = head;
    head.next = null;
    return newNode;
  }
  
}