const root = {
  val: 10,
  left:{
    val: 6,
    left:{
      val: 4
    },
    // right:{
    //   val: 8
    // }
  },
  right:{
    val: 14,
    left:{
      val: 12,
    },
    right: {
      val:16
    }
  }
}

const tree = {
  val: 1,
  left:{
    val:2,
    left:{
      val: 3
    }
  }
}

function isCompleteTree(root) {
  if (root == null) return true;

  let queue = new Array();
  queue.push(root);


  let notComplete = false;
  while (queue.length != 0) {
    let node = queue.shift();
    // 如果有空节点，记录空节点
    if (node == null) {
      notComplete = true;
      continue;
    }

    // 后续访问如果遇到空节点,说明经过了叶子
    if (notComplete) {
      return false;
    }
    queue.push(node.left);
    queue.push(node.right);
  }
  return true;
}

console.log(isCompleteTree(tree));