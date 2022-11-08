function maxDepth(root) {
  if(root == null) return 0;
  let queue = [];
  queue.push(root);

  let count = 0;
  while(queue.length != 0) {
    let size = queue.length;

    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    count++;
  }

  return count;

}