let list = {
    val:1,
    next:{
        val:1,
        next:{
            val:2,
            next:null
        }
    }
}



function deleteDuplicates(head) {
    if (!head) {
        return head;
    }

    let cur = head;
    while (cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;

}

console.log(deleteDuplicates(list));