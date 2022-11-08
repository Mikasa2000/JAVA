let head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: null
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

function deleteDuplicates(head) {
  if(head == null) return null;
  let cur = head;
  while(cur != null && cur.next != null) {
    if(cur.val == cur.next.val) {
      cur.next = cur.next.next;
    }else {
      cur = cur.next;
    }
  }
  return head;
}

console.log(deleteDuplicates(head2));