package www.mikasa.NorderStructor.Twodimensionalarray;

public class SparseArray {
    public static void main(String[] args) {
        // 创建一个原始二维数组
        int [][] chessArray= new int[11][11];
        chessArray[1][2] = 1;
        chessArray[2][3] = 2;
        // 定义一个被遍历元素的数据类型 新的变量名：要遍历的元素
        for(int[] row : chessArray ){
            for(int item : row) {
                System.out.printf("%d\t",item);
            }
            System.out.println();
        }

        // 2. 将二维数组转稀疏数组
        int sum = 0;
        for (int i = 0; i < chessArray.length; i++) {
            for(int j = 0; j < chessArray.length; j++) {
                if(chessArray[i][j] != 0){
                    sum++;
                }
            }
        }
        // 创建对应的稀疏数组
//        int SparseArr[][] = new int[sum + 1][3];
//        SparseArr[0][0] = 11;
//        SparseArr[0][1] = 11;
//        SparseArr[0][2] = sum;
//        int count = 0;
//        for (int i = 0; i < chessArray.length; i++) {
//            for(int j = 0; j < chessArray.length; j++) {
//                if(chessArray[i][j] != 0){
//                    count++;
//                    SparseArr[count][0] = i;
//                    SparseArr[count][1] = j;
//                    SparseArr[count][2] = chessArray[i][j];
//                }
//            }
//        }
//        System.out.println();
//        System.out.println("行\t列\tval");
//        for(int i = 0; i < SparseArr.length;i++) {
//            System.out.printf("%d\t%d\t%d\t\n",SparseArr[i][0],SparseArr[i][1],SparseArr[i][2]);
//        }


        // 3. 将稀疏数组还原成二维数组


//         二维数组静态初始化
        int arr2[][] = new int [][] {{1,2,3},{1,23,18,20},{6,7,8}};
        for(int[] row : arr2 ){
            for(int item : row) {
                System.out.printf("%d\t",item);
            }
            System.out.println();
        }
        System.out.println("----------------");
        System.out.println(arr2.length); // 表示这个二维数组有多少行
        System.out.println(arr2[1].length); // 表示某一列的长度
    }
}
