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



function maxDepth(root) {
    let queue = [];
    if(root == null) return 0;

    queue.push(root);
    let count = 0;
    while(queue.length > 0) {
        let size = queue.length;
        let node = queue.shift();
        if(node.left || node.right && size !== 0) {
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            count++;
        }
    }
    return count;
}


console.log(maxDepth(TreeNode));
console.log(TreeNode);