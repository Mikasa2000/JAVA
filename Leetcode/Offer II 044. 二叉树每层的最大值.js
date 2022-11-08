function largestValues(root) {
  if(root == null) return [];
  let queue = new Array();
  queue.push(root);
  let res = new Array();
  let maxVal = -Number.MAX_VALUE;

  while(queue.length != 0) {
    let size = queue.length;
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      maxVal = Math.max(maxVal, node.val);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    res.push(maxVal);
  }
  return res;
}