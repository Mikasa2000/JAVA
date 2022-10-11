package www.mikasa.OrderStructor.LinkedList;

import java.util.Stack;

public class LinkListDemo2 {
    public static void main(String[] args) {
        // 创建链表的每一个节点
        ListNode node1 = new ListNode(10);
        ListNode node2 = new ListNode(20);
        ListNode node3 = new ListNode(30);
        ListNode node4 = new ListNode(40);

        // 创建一个链表结构
        SingleListNode list1 = new SingleListNode();
        list1.addNode(node1);
        list1.addNode(node2);
        list1.addNode(node3);
        list1.addNode(node4);


//        System.out.println(searchNode(list1.getHead(), 2));
//        System.out.println(getLength(list1.getHead()));
//        System.out.println(reverseList(list1.getHead()));
        System.out.println(reverseList(list1.getHead()));
        list1.show();

    }
    //1. 查找单链表中倒数第k个节点（新浪面试题）
    public static ListNode searchNode(ListNode head, int index) {
        ListNode fast = head;
        ListNode slow = head;
        for (int i = 0; i < index; i++) {
            // 1. 让快指针向前移动
            if(fast != null) {
                fast = fast.next;
            }else { // 如果等于null，就说明链表长度不够，直接返回
                return slow = null;
            }
        }
        //快指针慢指针同步
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow;
    }

    // 2.求单链表的节点个数（新浪面试题）
    public static int getLength(ListNode head) {
        ListNode temp = head;
        int count = 0;
        if(temp.next == null) {
            return count;
        }
        while (temp.next != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    // 3.单链表反转（腾讯面试题）
    public static ListNode reverseList(ListNode head) {
        // 创造一个双指针
        ListNode pre = null;
        ListNode temp = null;
        ListNode cur = head;
        // 当传入的链表不为空时
        while(cur != null) {
          temp = cur.next;
          cur.next = pre;
          pre = cur;
          cur = temp;
        }
        return pre;
    }

    // 4.从尾到头打印单链表（不破坏原链表）
    public static ListNode ReverseList(ListNode head) {
        Stack<ListNode> myStack= new Stack<>();
        // 把链表节点全部摘下放入栈中
        while(head != null) {
            myStack.push(head);
            head = head.next;
        }
        if(myStack.isEmpty()) {
            return null;
        }
        ListNode node = myStack.pop();
        ListNode dummy = node; // dummy是新节点
        while(!myStack.isEmpty()) {
            ListNode tempNode = myStack.pop();
            node.next = tempNode;
            node = node.next;
        }
        node.next = null;
        return dummy;
    }

    // 5.递归反转链表
//    public static ListNode ReverseRecurision(ListNode head) {
//
//    }

}


// 创建链表
class SingleListNode{
    // 创建一个头节点
    private ListNode head = new ListNode(0);
    public ListNode getHead() {
        return head;
    }

    // 添加节点到单链表
    public void addNode(ListNode node) {
        // 保存头节点
        ListNode temp = head;
        while(true) {
            if(temp.next == null) {
                break;
            }
            // 一直向下循环
            temp = temp.next;
        }
        temp.next = node;
    }

    // 展示单链表
    public void show() {
        // 判断链表是否为空
        if(head.next == null) {
            System.out.println("链表为空");
            return;
        }

        // 创建一个指针指向头节点
        ListNode temp = head;
        while(true) {
            // 循环到尾部
            if(temp.next == null) {
                break;
            }
            // 展示头节点的下一个
            System.out.println(temp.next);
            temp = temp.next;
        }

    }
}

// 创建每一个节点的对象
class ListNode{
    int val;
    ListNode next = null;

    // 构造方法
    public ListNode(int val) {
        this.val = val;
    }

    @Override
    public String toString() {
        return "ListNode{" +
                "val=" + val +
                ", next=" + next +
                '}';
    }
}
