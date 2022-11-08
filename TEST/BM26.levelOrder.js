let tree = {
  val:4,
  left:{
      val:5,
      left:{
          val:6,
          left:{
              val:0
          },
          right:{
              val:1
          }
      }
  },
  right:{
      val:5,
      right:{
          val:6,
          left:{
              val:1
          },
          right:{
              val:0
          }
      }
  }
}


function levelOrder(root) {
  let queue = new Array();
  let res = new Array();

  if(root == null) return res;

  queue.push(root);

  while(queue.length != 0) {
    let size = queue.length;
    let curLevel = new Array();
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    } 
    res.push(curLevel);
  }
  return res;
}

console.log(levelOrder(tree));