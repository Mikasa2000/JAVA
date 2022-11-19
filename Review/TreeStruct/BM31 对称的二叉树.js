function isSymmetrical(root) {
  if(root == null) return true;

  let q1 = [];
  let q2 = []
  q1.push(root.left);
  q2.push(root.right);

  while(q1.length && q2.length) {
    let node1 = q1.shift();
    let node2 = q2.shift();

    if(node1 == null && node2 == null) {
      continue;
    }

    if(node1 == null || node2 == null || node1.val != node2.val) {
      return false;
    }

    q1.push(node1.left);
    q1.push(node1.right);
    q2.push(node2.left);
    q2.push(node2.right);
  }
  return true;
}