/**
 * 反转链表
 *
 * */


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

function reverseList(pHead) {
    let stack = new Array();
    if(pHead == null) {
        return pHead;
    }

    // 压栈
        while(pHead != null) {
            stack.push(pHead);
            pHead = pHead.next;
    }
    // 出栈
    let headNode = stack.pop();// 创建一个新的节点
    let curr = headNode; // 创建一个指针
    while(stack.length > 0) {
        curr.next = stack.pop();
        curr = curr.next;
        curr.next = null;
    }
    return headNode;

}

// function stackReverse(pHead) {
//     if(pHead.next == null || pHead == null) return pHead;
//     let stack2 = new Array();
//
//     // 入栈
//     while(pHead != null) {
//         stack2.push(pHead);
//         pHead = pHead.next;
//     }
//     // 出栈
//     let newNode = stack2.pop();
//     let cur = newNode;
//     while(stack2.length > 0) {
//         cur.next = stack2.pop();
//         cur = cur.next;
//         cur.next = null;
//     }
//     return newNode;
// }


console.log(reverseList(pHead));
console.log(pHead)
// console.log(reverseList2(pHead));