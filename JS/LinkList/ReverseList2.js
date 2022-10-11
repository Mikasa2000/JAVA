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

let pHead2 = {
    val:0,
    next:null
}

// 改变了原链表（双指针）
function reverseList(pHead) {
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

console.log(reverseList(pHead));
console.log(pHead);