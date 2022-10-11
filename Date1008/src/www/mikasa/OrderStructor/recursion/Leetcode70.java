package www.mikasa.OrderStructor.recursion;
/**
 * n = 4
 * 1 + 1 + 1 + 1
 * 1 + 2 + 1
 * 2 + 2
 * 2 + 1 + 1
 * 1 + 1 + 2
 *
 * n = 5
 * 1 + 1 + 1 + 1 + 1
 *
 * 1 + 2 + 2
 * 2 + 2 + 1
 * 2 + 1 + 2
 *
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 1 + 1 + 2
 * 2 + 1 + 1 + 1
 *
 * 1,2,3,5,8
 * n - 1 + n + 1
 * */
public class Leetcode70 {
    public static void main(String[] args) {
        System.out.println(clumb(2));
    }

    public static int clumb(int n) {
        if(n == 1 || n == 2) {
            return n;
        }
        return clumb(n - 1) + clumb(n - 2);
    }
}
