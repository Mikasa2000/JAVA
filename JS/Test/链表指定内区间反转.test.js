function ListNode(x){
  this.val = x;
  this.next = null;
}


let head = {
  val:1,
  next:{
    val:2,
    next:{
      val:3,
      next:{
        val:4,
        next:{
          val:5,
          next:null
        }
      }
    }
  }
}

function reverseBetween(head, m, n) {
  // 定义一个虚拟头节点
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let prev = dummyNode;
  let cur = head;

  // 找到m
  for(let i = 1; i < m; i++) {
    prev = cur;
    cur = cur.next;
  }

  // 从m到n反转
  for(let i = m; i < n; i++) {
    let temp = cur.next;
    cur.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }

  return dummyNode.next;
}

console.log(reverseBetween(head, 2, 4));




