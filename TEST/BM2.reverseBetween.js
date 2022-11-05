let pHead = {
  val:1,
  next:{
      val:2,
      next:{
          val:3,
          next:{
            val:4,
            next:{
              val:5,
              next:{
                val:6,
                next:null
              }
            } 
          }
      }
  }
}

function ListNode(val,next) {
  this.val = val;
  this.next = null;
}

// 双指针 + 虚拟头节点
function reverseBetween(pHead, m, n) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = pHead;
  let pre = dummyNode;
  let cur = pHead;

  for(let i = 1; i < m; i++) {
    pre = cur;
    cur = cur.next; // cur = m
  }

  for(let i = m; i < n; i++) {
    let temp = cur.next;
    cur.next = temp.next;
    temp.next = pre.next;
    pre.next = temp;
  }
  return dummyNode.next;
}

console.log(reverseBetween(pHead, 2, 4));
