let head = {
  val:1,
  next:{
    val:1,
    next:{
      val:1,
      next:{
        val:2,
        next:{
          val:2,
          next:{
            val:3,
            next:null
          }
        }
      }
    }
  }
}

let head2 = {
  val: 1,
  next:{
    val:2,
    next:{
      val: 6,
      next: {
        val: 3,
        next:{
          val:6
        }
      }
    }
  }
}

function ListNode(x){
  this.val = x;
  this.next = null;
}

/**
 * 
 * @param {*} head 
 * @returns 
 * 并且保证给定的节点 val 不是链表中的最后一个节点。
 */

function deleteDuplicates(head) {
  if(head == null) return null;
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let cur = dummyNode;

  while(cur.next != null) {
    // 遇到节点相同的两个值
    if(cur.next.val == cur.next.next.val) { 
      let temp = cur.next.val;
      // 将所有相同的节点跳过
      while(cur.next != null && cur.next.val == temp) {
        cur.next = cur.next.next; // 向后移动
      }
    }else {
      cur = cur.next;
    }
  }
  return dummyNode.next;
}

console.log(deleteDuplicates(head2));