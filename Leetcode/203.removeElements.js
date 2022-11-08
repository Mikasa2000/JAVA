function ListNode(x){
  this.val = x;
  this.next = null;
}
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
        val: 6,
        next:{
          val:6,
        }
      }
    }
  }
}

/**
 * 
 * @param {*} head 
 * @param {*} val 
 * @returns 
 * 
 */
function removeElements(head, val) {
  if(head == null) return head;
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let cur = dummyNode;
  while(cur.next != null && cur != null) {
    if(cur.next.val == val) {
      while(cur.next.val == val && cur.next != null) {
        cur.next = cur.next.next;
      }
    }else {
      cur = cur.next;
    }
  }

  return dummyNode.next;
}

// console.log(removeElements(head2, 6));


// var removeElements2 = function(head, val) {
//   if(head == null) return head;
//   let dummyNode = new ListNode(-1);
//   dummyNode.next = head;
//   let pre = dummyNode;
//   while(pre.next !== null) {
//       if(pre.next.val == val) {
//           pre.next = pre.next.next;
//       }else {
//           pre = pre.next;
//       }
//   }
//   return dummyNode.next;
// };


let arr = [1];
let res = arr.pop()
console.log(res)