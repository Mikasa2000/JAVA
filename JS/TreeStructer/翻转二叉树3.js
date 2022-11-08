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
  let q1 = [];
  let q2 = [];
  if(root == null) return root;
  q1.push(root.left);
  q2.push(root.right);

  while(q1.length != 0 && q2.length != 0) {
    let left = q1.shift();
    let right = q2.shift();

    left = {name:"zs"}

    // let temp = left;
    // left = right;
    // right = temp;
    // if(node1.left && node1.right && node2.right && node2.left) {
    //   q1.push(node1.left);
    //   q2.push(node1.right);
    //   q1.push(node2.left);
    //   q2.push(node2.right);
    // }

  }

 console.log(root)
}

(Mirror(root3));
console.log(typeof root3.left);