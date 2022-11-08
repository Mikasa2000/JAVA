function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let root1 = {
  val: 1,
  left:{
    val: 3,
    left:{
      val:5
    }
  },
  right:{
    val: 2
  }
}

let root2 = {
  val: 2,
  left:{
    val: 1,
    right:{
      val: 4
    }
  },
  right:{
    val:3,
    right:{
      val:7
    }
  }
}


function mergeTree(root1, root2) {
  if(root1 == null)
    return root2;
  if(root2 == null)
    return root1;
  
  let queue = [];
  queue.push(root1);
  queue.push(root2);

  while(queue.length) {
    // 出队列 （每一层的节点）
    let node1 = queue.shift();
    let node2 = queue.shift();
    node1.val += node2.val; // node1是根节点

    // 分了四种情况

    // 1.如果两棵树左节点都不为空，加入队列
    if(node1.left != null && node2.left != null) {
      queue.push(node1.left);
      queue.push(node2.left);
    }

    // 2. 如果两棵树右节点都不为空，加入队列
    if(node1.right != null && node2.right != null) {
      queue.push(node1.right);
      queue.push(node2.right);
    }

    // 3. 若node1的左节点为空，直接赋值
    if(node1.left == null && node2.left != null) {
      node1.left = node2.left;
    }

    // 4.当t1的右节点 为空 t2右节点不为空，就赋值过去
    if(node1.right == null && node2.right != null) {
      node1.right = node2.right;
    }
  }
  return root1;
}

console.log(mergeTree(root1, root2));