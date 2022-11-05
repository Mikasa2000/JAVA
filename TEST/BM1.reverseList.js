let pHead = {
  val:1,
  next:{
      val:2,
      next:{
          val:3,
          next:null
      }
  }
}


// 1. 头指针(双指针)
function ReverseList1(pHead) {
  let pre = null;
  let cur = pHead;
  let temp = null;
  while(cur != null) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}

// 2. 栈
function ReverseList2(pHead) {
  let stack = new Array();
  if(pHead == null) return pHead;

  // 压栈
  while(pHead) {
    stack.push(pHead);
    pHead = pHead.next;
  }

  // 出栈
  let newNode = stack.pop();
  let cur = newNode;
  while(stack.length > 0) {
    cur.next = stack.pop();
    cur = cur.next; // 移动指针
    cur.next = null;
  }
  return newNode;
}

console.log(ReverseList2(pHead));

// 3. 递归

function ReverseList3(pHead) {
  if(pHead == null || pHead.next == null) return pHead;

  const newHead = ReverseList3(pHead.next);
  pHead.next.next = pHead;
  pHead.next = null;
  return newHead;
}

// console.log(ReverseList3(pHead));