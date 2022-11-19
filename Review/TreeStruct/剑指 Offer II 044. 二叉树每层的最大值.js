function maxValTree(root) {
  if(root == null) return [];

  let queue = [];
  queue.push(root);
  let res = [];
  let maxVal = -Number.MAX_VALUE;

  while(queue.length) {
    let size = queue.length;
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      maxVal = Math.max(maxVal, node);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    res.push(maxVal);
  }

  return res;
}