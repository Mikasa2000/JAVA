/**
 * public ListNode reverseList(参数0) {
    if (终止条件)
        return;

    逻辑处理（可能有，也可能没有，具体问题具体分析）

    //递归调用
    ListNode reverse = reverseList(参数1);

    逻辑处理（可能有，也可能没有，具体问题具体分析）
}
 *
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
// 递归
function reverseList(pHead) {
    if(pHead == null || pHead.next == null) { // 递归中止条件
        return pHead;
    }else {
        const newHead = reverseList(pHead.next);// 递归调用
        pHead.next.next = pHead;//到了递归的最后一层，让后面一个节点指向前一个结点
        pHead.next = null;// 前一个结点的next制空

        return newHead; // 返回最后一个节点
    }

}

console.log(reverseList(pHead));
