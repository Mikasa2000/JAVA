function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let pHead = {
    val:1,
    next:{
        val:3,
        next:{
            val:3,
            next:null
        }
    }
}
// 递归
function removeList(head, val) {
    // 遍历完整个链表
    if(head == null) return head;
    // 如果当前链表的值为val，删除前节点，从下一个节点开始判断
    if(head.val == val) {
        return removeList(head.next, val);
    }else{
        // 如果当前节点的值不为val，保留，并判断下一个节点
        head.next = removeList(head.next, val);
    }
    return head;
}


console.log(removeList(pHead, 3))
// 迭代双指针
function remove(head, val) {
    // if(head == null) return head;
    let dummyNode = new ListNode(-1);// 设置虚拟头节点是为了考虑到第一个元素
    dummyNode.next = head;
    let pre = dummyNode;
    while (pre.next != null) {
        if(pre.next.val == val) {
            pre.next = pre.next.next;
        }else {
            pre = pre.next;
        }
    }
    return dummyNode.next;
}
