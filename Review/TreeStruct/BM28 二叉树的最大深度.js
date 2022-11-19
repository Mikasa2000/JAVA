function maxDepth(root) {
  if(root == null) return 0;
  let queue = [];
  let maxDeep = 0;
  queue.push(root);

  if(queue.length) {
    let size = queue.length;
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    maxDeep++;
  }
  return maxDeep;
}