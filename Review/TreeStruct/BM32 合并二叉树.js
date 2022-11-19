let root1 = {
  val:1,
  left:{
    val:2
  },
  right:{
    val:3
  }
}

let root2 = {
  val:100,
  left:{
    val:200
  },
  right:{
    val:300
  }
}

function mergeTrees(root1, root2) {
  if(root1 == null) return root2;
  if(root2 == null) return root1;

  let queue = [];
  queue.push(root1);
  queue.push(root2);

  while(queue.length) {
    let node1 = queue.shift();
    let node2 = queue.shift();
    node1.val += node2.val;

    if(node1.left != null && node2.left != null) {
      queue.push(node1.left);
      queue.push(node2.left);
    }

    if(node1.right != null && node2.right != null) {
      queue.push(node1.right);
      queue.push(node2.right);
    }

    if(node1.left == null && node2.left != null) {
      node1.left = node2.left;
    }

    if(node1.right == null && node2.right != null) {
      node1.right = node2.right;
    }
  }
  return root1;
}

console.log(mergeTrees(root1, root2));