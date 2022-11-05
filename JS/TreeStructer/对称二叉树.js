/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

let root = {
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


let root2 = {
    val:1,
    left:{
        val:2,
        right:{
            val:3
        }
    },
    right:{
        val:2,
        right:{
            val:3
        }
    }
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

function isSymmetrical(pRoot)
{
    // write code here
    if(pRoot == null) return true;

    // 辅助队列
    let q1 = new Array();
    let q2 = new Array();
    q1.push(pRoot.left);
    q2.push(pRoot.right);

    while(q1.length !== 0 && q2.length !== 0) {
        let left = q1.shift();
        let right = q2.shift();

        // 都为空，暂时对称
        if(left == null && right == null) {
            continue;
        }
        // 某一个为空或者数字不相等则不对称
        if(left == null || right == null || left.val !== right.val) {
            return false;
        }
        // 从左往右添加队列
        q1.push(left.left);
        q1.push(left.right);
        // 从右往左添加队列
        q2.push(right.right);
        q2.push(right.left);
    }
    return true;
}

console.log(isSymmetrical(root3));
