// 递归
function hasPathSum(root, sum) {
    // 如果是空节点，找不到路径
    if(root == null) return false;

    // 叶子节点
    if(root.left == null && root.right == null && sum - root.val == 0) {
        return true;
    }

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}

