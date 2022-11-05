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
                    next:{
                        val:6,
                        next:null
                    }
                }
            }
        }
    }
}

// 栈结构
function reverseList(pHead) {
    let stack = new Array();
    if(pHead == null) {
        return pHead;
    }
    while(pHead != null) {
        stack.push(pHead);
        pHead = pHead.next;
    }

    let headNode = stack.pop();
    let cur = headNode;
    while(stack.length > 0) {
        cur.next = stack.pop();
        cur = cur.next;
        cur.next = null;
    }

    return headNode;

}

// 头插法(双指针)
function ReverseList(pHead) {
    let pre = null;
    let temp = null;
    let cur = pHead;

    while(cur != null) {
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}

// console.log(pHead);
// console.log(reverseList(pHead));

// 递归
function recursionList(pHead) {
    // 中止条件
    if(pHead == null || pHead.next == null) {
        return pHead;
    }else {
        const newNode = recursionList(pHead.next);
        pHead.next.next = pHead;
        pHead.next = null;
        return newNode;
    }
}
// console.log(ReverseList(pHead));
// console.log(pHead);
console.log(recursionList(pHead));

