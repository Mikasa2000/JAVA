function invertTree(root) {
  if(root == null) return root;

  let queue = [];
  queue.push(root);

  while(queue.length != 0) {
    let temp = queue.shift();
    let left = temp.left;
    temp.left = temp.right;
    temp.right = left;

    if(temp.left) queue.push(temp.left);
    if(temp.right) queue.push(temp.right);
  }

  return right;
}