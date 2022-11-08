function isSymmetrical(root) {
  if(root == null) return true;
  let q1 = [];
  let q2 = [];
  q1.push(root.left);
  q2.push(root.right);

  while(q1.length != 0 && q2.length != 0) {
    let left = q1.shift();
    let right = q2.shift();

    if(left ==  null && right == null) {
      continue;
    }
    if(left == null || right == null || left.val != right.val) {
      return false;
    }
    q1.push(left.left);
    q1.push(left.right);
    q2.push(right.right);
    q2.push(right.left);
  }
  return true;
}