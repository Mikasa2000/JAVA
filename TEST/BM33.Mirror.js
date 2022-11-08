let tree2 = {
  val:8,
  left:{
      val:7,
      right:{
          val:6,
          right:{
              val:5,
              right:{
                  val:6
              }
          }
      }
  }
}

let root3 = {
  val:8,
  left:{
      val:6,
      left:{
          val:5,
      },
      right:{
          val:7
      }
  },
  right:{
      val:10,
      left:{
          val:9,
      },
      right:{
          val:11
      }

  }
}

function Mirror(root) {
  if(root == null) return root;
  let q1 = [];
  let q2 = [];
  q1.push(root.left);
  q2.push(root.right);

  while(q1.length != 0 && q2.length != 0) {
    let left = q1.shift();
    let right = q2.shift();

    if(left == null || right == null) {
      continue;
    }

    let temp = left;
    left = right;
    right = temp;
   

    q1.push(left.left);
    q1.push(left.right);
    q2.push(right.left);
    q2.push(right.left);
    
  }
  return root;
}

console.log(Mirror(root3))