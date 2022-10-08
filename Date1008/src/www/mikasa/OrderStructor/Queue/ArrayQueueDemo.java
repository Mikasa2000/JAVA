package www.mikasa.OrderStructor.Queue;

import java.util.Scanner;

public class ArrayQueueDemo {
    public static void main(String[] args) {
        ArrayQueue arrayQueue = new ArrayQueue(3);
        arrayQueue.addQueue(10);
        arrayQueue.addQueue(20);
        arrayQueue.addQueue(30);
        arrayQueue.getQueue();
        arrayQueue.showQueue();
    }
}
// 使用数组模拟队列
class ArrayQueue {
    private int maxSize;
    private int front;
    private int rear;
    private int[] arr; // 该数组用于存放数据

    // 创建队列的构造器（方法）
    public ArrayQueue(int arrMaxSize) {
        maxSize = arrMaxSize;
        arr = new int[maxSize];
        front = -1; // 指向队列头部
        rear = -1; // 指向队列尾部
    }
    // 判断队列是否满了
    public boolean isFull() {
       return rear == maxSize - 1;
    }

    // 判断队列是否为空
    public boolean isEmpty() {
        return rear == front;
    }

    // 添加数据到队列
    public void addQueue(int n) {
        // 判断队列是否满了
        if(isFull()) {
            System.out.println("队列已满，不能加入数据！");
            return;
        }
        rear++;
        arr[rear] = n;
    }

    // 出队列
    public int getQueue() {
        // 判断队列是否空
        if(isEmpty()) {
            System.out.println("队列为空");
            throw new RuntimeException("队列空，不能取数据");
        }else {
            front++;
            return arr[front];
        }
    }

    // 显示队列所有数据
    public void showQueue() {
        // 判断是否为空
        if(isEmpty()) {
            throw new RuntimeException("队列为空");
        }
        for (int i = 0; i < arr.length ; i++) {
            System.out.printf("arr[%d] = %d\n", i, arr[i]);
        }
    }


}
