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

console.log(deleteDuplicates(head));