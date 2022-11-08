const num1 = 2;
const num2 = 4;

/**
 * MAX_VALUE 属性值接近于 1.79E+308。
 * 大于 MAX_VALUE 的值代表 "Infinity"。
 */

if (num1 * num2 <= Number.MAX_VALUE) {
  console.log("111")
} else {
  console.log("222")
}

console.log(Number.MAX_VALUE)