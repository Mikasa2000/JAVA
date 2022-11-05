function ListNode(val) {
    this.val = val;
    this.next = null;

}
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
                    next:null
                }
            }
        }
    }
}

function removeNthFromEnd(head, n) {
    let res = new ListNode(-1);
    res.next = head;

    let cur = head;
    let prev = res;
    let fast = head;

    while(n != 0) {
        fast = fast.next;
        n--;
    }

    while(fast != null) {
        fast = fast.next;
        prev = cur;
        cur = cur.next;
    }
    prev.next = cur.next;
    return res.next;
}

console.log(removeNthFromEnd(pHead, 2));