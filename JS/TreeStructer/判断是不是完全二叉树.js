function isCompleteTree(root) {
  let notComplete = true;
  if(root == null)
    return true;
  let queue = new Array();
  queue.push(root);
  while(queue.length != 0) {
    let node = queue.shift();
    if(node == null) {
      notComplete = false;
    }else { 
      // 如果下一个节点node不为空
      if(notComplete == fasle) {
        return false;
      }
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return true;
}


function isCompleteTree2(root) {
  let notComplete = true;
  if(root == null) {
    return true;
  }

  let queue = new Array();
  queue.push(root);
  while(queue.length != 0) {
    let node = queue.shift();
    if(node != null) {
      if(notComplete == false) { // 此时证明有空节点了，但是你仍然有下一个节点
        return false;
      }
      queue.push(node.left);
      queue.push(node.right);
    }else {
      notComplete = false;
    }

  }
  return true;
}
