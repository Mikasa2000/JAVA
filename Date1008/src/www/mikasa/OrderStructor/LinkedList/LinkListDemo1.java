package www.mikasa.OrderStructor.LinkedList;

public class LinkListDemo1 {
    public static void main(String[] args) {
        HeroNode hero1 = new HeroNode(1,"syx","renqi");
        HeroNode hero2 = new HeroNode(2,"sym","baodi");
        HeroNode hero3 = new HeroNode(3,"cxz","cxz");

        // 创建一个链表
        SingleLinkedList list1 = new SingleLinkedList();
        list1.add(hero1);
        list1.add(hero2);
        list1.add(hero3);
//        list1.delete(3);
        System.out.println(getLength(list1.getHead()));

    }

    // 查找单链表的第k个节点
    public static HeroNode findNode(HeroNode head, int index) {
        int n = 0;
        HeroNode fast = head;
        HeroNode slow = head;
        for (int i = 0; i < index; i++) {
            if(fast != null) {
                fast = fast.next;
            }else {
                return slow = null;
            }

        }
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow;
    }


    /**
     *
     * @param head 链表的头节点
     * @return 返回头节点的有效节点个数
     * */

    public static int getLength(HeroNode head) {
        if(head.next == null) {
            return 0;
        }
        int length = 0;
        HeroNode cur = head.next;
        while(cur != null) {
            length++;
            cur = cur.next;
        }
        return length;
    }
}

class SingleLinkedList{
    // 存放头节点，头节点不动，不存放具体数据
    private HeroNode head = new HeroNode(0,"","");

    public HeroNode getHead() {
        return head;
    }

    // 1.添加节点到单向链表
    public void add(HeroNode heroNode){
        HeroNode temp= head; // 头节点
        // 遍历链表，找到最后
        while (true) {
            if(temp.next == null) {
                break;
            }
            temp = temp.next;
        }
        // 当退出while循环时， temp就指向了链表的最后
        temp.next = heroNode;
    }

    // 2.显示链表
    public void show() {
        // 判断是否为空
        if(head.next == null) {
            System.out.println("链表为空");
            return;
        }
        HeroNode temp = head.next;
        while(true) {
            if(temp == null) {
                break;
            }
            System.out.println(temp);
            temp = temp.next;
        }
    }

    // 3.修改节点
    public void update(HeroNode newHeroNode) {
        if(head.next == null) {
            System.out.println("链表为空");
            return;
        }
        HeroNode temp = head.next;
        boolean flag = false;
        while(true) {
            if(temp == null) {
                break;
            }
            if(temp.heroId == newHeroNode.heroId) {
                flag = true;
                break;
            }
            temp = temp.next;
        }
        if(flag == true) {
            temp.name = newHeroNode.name;
            temp.nickName = newHeroNode.nickName;
        }else {
            System.out.println("无此节点");
        }
    }

    // 4.删除节点
    public void delete(int heroId) {
        if(head.next == null) {
            System.out.println("无此节点");
        }
        HeroNode temp = head;
        boolean flag = false;
        while (true) {
            if(temp.next == null) {
                System.out.println("无此节点");
                break;
            }
            if(temp.next.heroId == heroId) {
                flag = true;
                break;
            }
            temp = temp.next;
        }
        if(flag) {
            temp.next = temp.next.next;
        }else {
            System.out.println("要删除的节点不存在");
        }

    }

    //5. 获取单链表的节点个数




}


class HeroNode {
    public int heroId;
    public String name;
    public String nickName;
    public HeroNode next;


    public HeroNode(int heroId, String name, String nickName) {
        this.heroId = heroId;
        this.name = name;
        this.nickName = nickName;
    }


    public String toString() {
        return "HeroNode{heroId = " + heroId + ", name = " + name + ", nickName = " + nickName  + "}";
    }
}
