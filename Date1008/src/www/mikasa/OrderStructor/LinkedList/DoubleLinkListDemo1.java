package www.mikasa.OrderStructor.LinkedList;

public class DoubleLinkListDemo1 {
    public static void main(String[] args) {
        // 创建链表的每一个节点
        ListNode1 node1 = new ListNode1(10);
        ListNode1 node2 = new ListNode1(20);
        ListNode1 node3 = new ListNode1(30);
        ListNode1 node4 = new ListNode1(40);

        // 创建一个链表结构
        DoubleLinkList list1 = new DoubleLinkList();
        list1.add(node1);
        list1.add(node2);
        list1.add(node3);
        list1.add(node4);

        list1.show();
    }
}



class DoubleLinkList{
    // 初始化一个表头
    private ListNode1 head = new ListNode1(0);
    public ListNode1 getHead() {
        return head;
    }

    // 1.显示双向链表
    public void show() {
        // 判断链表是否为空
        if(head.next == null) {
            System.out.println("此链表为空");
            return;
        }
        ListNode1 temp = head;
        while(true) {
            // 循环到尾部
            if(temp.next == null) {
                break;
            }
            // 展示下一个头节点
            System.out.println(temp.next);
            temp = temp.next;
        }
    }
    // 2.添加元素
    public void add(ListNode1 newNode) {
        ListNode1 temp = head;
        while(true) {
            if(temp.next == null) {
                break;
            }

            temp = temp.next;
        }
        temp.next = newNode;
        newNode.pre = temp;
    }


    // 3.删除节点
    public void deleteNode(ListNode1 node) {
        // 判断当前链表是否为空
        if(head.next == null) {
            System.out.println("链表为空，不能删除");
        }
        ListNode1 temp = head.next;
        boolean flag = false;
        while(true) {
            if(temp == null) {
                break;
            }
            if(temp.val == node.val) {
                flag = true;
                break;
            }
            temp = temp.next; // temp后移
        }
        if(flag){
            temp.pre.next = temp.next;
            if(temp.next != null) {
                temp.next.pre = temp.pre;
            }

        }else {
            System.out.println("删除的节点不存在");
        }
    }

}



class ListNode1{
    public int val;
    public ListNode1 next;
    public ListNode1 pre;

    public ListNode1(int val){
        this.val = val;
    }
    public ListNode1(){

    }

    @Override
    public String toString() {
        return "ListNode1{" +
                "val=" + val +
                ", next=" + next +
                ", pre=" + pre +
                '}';
    }
}
