package www.mikasa.OrderStructor.recursion;

public class First {
    public static void main(String[] args) {

    }
    public static int f(int n) {
        if(n == 1) {
            return 1;
        }else {
            return f(n - 1) * n;
        }
    }
}



