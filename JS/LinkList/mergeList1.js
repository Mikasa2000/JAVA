let pHead1 = {
    val:1,
    next:{
        val:5,
        next:null
    }
}

let pHead2 = {
    val:2,
    next:{
        val:6,
        next:null
    }
}


function merge(pHead1, pHead2) {
    if(pHead1 == null) return pHead1;
    if(pHead2 == null) return pHead2;
    // 非规律化递归
    if(pHead1.val < pHead2.val) {
        pHead1.next = merge(pHead1.next, pHead2);
        return pHead1;
    }
    pHead2.next = merge(pHead1, pHead2.next);
    return pHead2;
}

console.log(merge(pHead1, pHead2));