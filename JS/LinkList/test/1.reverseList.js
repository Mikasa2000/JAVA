function reverse(head) {
  let pre = null;
  let cur = head;
  while(head != null) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}


function reverse2(head) {
  if(head == null) return head;
  let stack = new Array();

  while(head) {
    stack.push(head.val);
    head = head.next;
  }

  let newNode = stack.pop();
  let cur = newNode;
  while(stack.length) {
    cur.next = stack.pop();
    cur = cur.next();
    cur.next = null;
  }
  return newNode;
}


// function reverse3(head) {

// }


