package www.mikasa.NorderStructor.Tree;
/**
 * 完全二叉树
 * */
public class BinaryTreeDemo1 {
    public static void main(String[] args) {

    }
}

class BinaryTree{
    private String val;
    private BinaryTree left;
    private BinaryTree right;

    public BinaryTree(String val) {
        this.val = val;
    }

    public String getVal() {
        return val;
    }

    public void setVal(String val) {
        this.val = val;
    }

    public BinaryTree getLeft() {
        return left;
    }

    public void setLeft(BinaryTree left) {
        this.left = left;
    }

    public BinaryTree getRight() {
        return right;
    }

    public void setRight(BinaryTree right) {
        this.right = right;
    }

    @Override
    public String toString() {
        return "BinaryTree{" +
                "val='" + val + '\'' +
                '}';
    }

    public void preOrder() {

    }
}
