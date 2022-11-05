let tree = {
    val:1,
    left:null,
    right:null
}

let root3 = {
    val:1,
    left:{
        val:2,
        left:{
            val:3,
            left:{
                val:5
            }
        },
        right:{
            val:4
        }

    },
    right:{
        val:2,
        left:{
            val:4
        },
        right:{
            val:3,
            right:{
                val:5
            }
        },
    }
}
let tree1 = {
    val:1,
    left:{
        val:2
    },
    right:{
        val:3
    }
}


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
function Mirror(root) {
    if(root == null) {
        return root;
    }

    let q1 = new Array();
    let q2 = new Array();

    q1.push(root.left);
    q2.push(root.right);



    while (q1.length !== 0 && q2.length !== 0) {
        let leftNode = q1.shift();
        let rightNode = q2.shift();
        if(leftNode == null && rightNode == null) {
            return root;
        }
        if(leftNode == null || rightNode == null || leftNode.val != rightNode.val) {
            let temp = (leftNode == null ? null : leftNode.val);
            leftNode.val = (rightNode == null ? null : rightNode.val);
            rightNode = temp;
        }

        q1.push(leftNode.left);
        q1.push(leftNode.right);
        q2.push(rightNode.right);
        q2.push(rightNode.left);

    }

    return root;

}

console.log(Mirror(tree2))

