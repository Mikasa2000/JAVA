let pHead = {
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:2,
                next:{
                    val:1,
                    next:null
                }
            }
        }
    }
}

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类 the head
 * @return bool布尔型
 */
function isPail(head) {
    // write code here
    let q = head
    let p = head;
    while (q != null && q.next != null) {
        q = q.next.next;
        p = p.next;
    }
    // 如果q不为空,说明是奇数，需要将慢指针向后移动一位
    if (q != null) {
        p = p.next;
    }

    p = reverse(p); // 将后半段链表反转 1 -> 2 -> null
    q = head; // 此时的head存储的是后半段链表的初始状态 2->1->null

    while (p != null) {
        if (q.val != p.val) {
            return false;
        }
        //把每一层的val遍历一遍{val:next:{val:2:next...}
        q = q.next;
        p = p.next;
    }
    return true;
}

function reverse(head) {
    let pre = null;
    while (head != null) {
        let temp = head.next;
        head.next = pre;
        pre = head;
        head = temp;
    }
    return pre;
}
console.log(pHead.val)
console.log(isPail(pHead));