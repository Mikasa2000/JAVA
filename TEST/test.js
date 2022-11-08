let ans = [];
let innerObj = [{name:"zs"}]


ans.push(innerObj); //将innerObj的地址拷贝, ans = [[1,2,3]]
let res = innerObj.pop(); //改变innerObj内容

console.log(innerObj)
console.log(ans) //ans = [[1,2]] ans发生了改变
console.log(res)


/**
 * 但是如果将innerObj重新赋值，即改变其指向。
 * 那么ans中仍然是旧地址，改变innerObj不影响ans
 * 
 * 因此在回溯算法中，常使用类似于Array.from的方法，
 * 生成一个新的实例，内容和innerObj相同，将其push入数组，
 * 不必担心修改innnerObj引起ans改变
 */
// let ans = [];
// let innerObj = [1,2,3]
// ans.push(innerObj); //ans = [[1,2,3]]
// innerObj=[0,0,0] //改变innerObj指向
// console.log(ans)  //ans = [[1,2,3]]


let root = {
  left:{
    val:1
  }
}

let q1 = [];

q1.push(root.left);
let node = q1.shift();

node = {name:"zs"};

console.log(root);
