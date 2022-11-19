function isCompleteTree(root) {
  let notComplete = true;
  if(root == null) return true;

  let queue = [];
  queue.push(root);

  while(queue.length != 0) {
    let node = queue.shift();
    if(node != null) {
      // 此时证明你已经有空节点了，但你仍然有下一个值
      if(notComplete == false) {
        return false;
      }
      queue.push(node.left);
      queue.push(node.right);
    }else {
      /**
       * if(node == null) {
       *  notComplete = true;
       * }
       */
      notComplete = true;
    }
  }
  return true;
}