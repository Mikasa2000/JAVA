function exec(arr, root) {
    if(root == null) return;
    exec(arr, root.left);
    root.push(root.val);
    exec(arr, root.right);
}

function inorderTraversal(root) {
    let arr = new Array();
    exec(arr, root);
    return arr;
}

