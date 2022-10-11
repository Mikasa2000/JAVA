let pHead = {
    val:1,
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

let getKthFromEnd = function(head, k) {

    let fast = head;
    let slow = head;
    for(let i = 0; i < k; i++) {
        if(fast != null) {
            fast = fast.next;
        }else {
            return slow = null;
        }

    }

    while(fast != null) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};

console.log(getKthFromEnd(pHead,2));

