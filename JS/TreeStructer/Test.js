let TreeNode = {
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:null
        },

    },
    right: {
        val:3,
        left:null,
        right:{
            val:5
        }
    }
}


function levelOrder(root) {
    let queue = [];
    let res = [];

    if(root == null) return res;

    queue.push(root);
    while(queue.length != 0) {
        let size = queue.length;
        let curLevel = [];
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(curLevel);

    }

    return res;

}


function maxDeep2(root) {
    if(root == null) return 0;
    let queue = [];
    let res = 0;
    queue.push(root);
    while(queue.length != 0) {
        // 记录当前层有多少个节点
        let n = queue.length;
        for(let i = 0; i < n; i++) {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res++;
    }
    return res;
}

// console.log(maxDeep2(TreeNode));
console.log(levelOrder(TreeNode));