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