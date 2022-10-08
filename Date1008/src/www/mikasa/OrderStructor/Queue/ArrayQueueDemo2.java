package www.mikasa.OrderStructor.Queue;

public class ArrayQueueDemo2 {
    public static void main(String[] args) {
        ArrayQueue2 aq = new ArrayQueue2(3);
        aq.addQueue(10);
        aq.addQueue(20);
        aq.addQueue(30);
        aq.showQueue();
    }
}

class ArrayQueue2{
    private int front;
    private int rear;
    private int[] arr2;
    private int maxSize;
    // 创建构造器
    public ArrayQueue2(int arrMaxSize) {
        front = 0;
        rear = 0;
        maxSize = arrMaxSize;
        arr2 = new int[maxSize];
    }

    // 判断队列是否满了
    public boolean isFull() {
        if((rear + 1) % maxSize == front){
            return true;
        }else {
            return false;
        }
    }

    // 判断队列是否为空
    public boolean isEmpty() {
        if(rear == front) {
           return true;
        }
        return false;
    }

    // 添加元素
    public void addQueue(int n) {
        // 判断是否满了
        if(isFull()) {
            throw new RuntimeException("队列已满");
        }
        arr2[rear] = n;
        rear = (rear + 1) % maxSize;
    }

    // 移除元素
    public int removeQueue() {
        // 判断是否为空
        if(isEmpty()) {
           throw new RuntimeException("队列为空");
        }
        int value = arr2[front];
        front = (front + 1) % maxSize;
        return value;

    }
    // 求出当前队列数据的有效数据个数
    public int size() {
        return (rear + maxSize - front) % maxSize;
    }
    // 展示队列元素
    public void showQueue() {
        // 判断是否为空
        if(isEmpty()) {
            throw new RuntimeException("队列为空");
        }

        for (int i = front; i < front + size() ; i++) {
            System.out.printf("arr[%d]=[%d]\n",i % maxSize, arr2[i % maxSize]);
        }
    }



}


