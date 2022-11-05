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
    if(root == null) {
        return root;
    }

    let queue = new Array();
    queue.push(root);

    while(queue.length != 0) {
        let node = queue.shift();
        let left = node.left;
        node.left = node.right;
        node.right = left;

        if(node.left != null) {
            queue.push(node.left);
        }

        if(node.right != null) {
            queue.push(node.right);
        }

    }
    return root;
}

console.log(Mirror(root3));