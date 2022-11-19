function Mirror(root) {
  if(root == null) return root;

  let queue = [];
  queue.push(root);

  while(queue.length) {
    let size = queue.length;
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

  }
  return root;
}