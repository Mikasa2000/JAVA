let root = {
    val:1,
    left:{val:2},
    right:{val:3, left:{
        val:5}
    }
}

function maxDepth(root) {
    // write code here
    let queue = [];
    if (root == null) return 0;

    queue.push(root); // 入队
    let count = 1;
    while (queue.length != 0) {
        let node = queue.shift();
        // 出队
        // while(size--) {
        //     let node = queue.shift();
        //     node.left && queue.push(node.left);
        //     node.right && queue.push(node.right);
        // }
        if(node.left || node.right) {
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            count++;
        }
    }
    return count;
}

console.log(maxDepth(root));