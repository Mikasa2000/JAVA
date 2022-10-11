package www.mikasa.OrderStructor.LinkedList;

public class CircleListDemo1 {
    public static void main(String[] args) {

    }

}


class CircleList{

    private ListNode2 head = new ListNode2(-1);
    // 1.根据顺序添加节点
    public void add(int nums){

        while (nums < 1) {
            System.out.println("nums值不正确");
            return;
        }
        ListNode2 cur = null; // 辅助指针
        for (int i = 1; i <= nums ; i++) {
            ListNode2 value = new ListNode2(nums);
            // 如果序号是1
            if(i == 1) {
                head = value;
//                head.setNext(value);
            }
        }
    }

}

class ListNode2{
    int val;
    public ListNode2 next;

    public ListNode2() {}

    public ListNode2(int val) {
        this.val = val;
//        this.next.val = val;
    }

    @Override
    public String toString() {
        return "ListNode2{" +
                "val=" + val +
                ", next=" + next +
                '}';
    }
}