let result = new Array(); // [[1,2],[1,3]....]
let path = new Array(); // 暂时存放每个结果[1,2],[1,3]....

function combine(n, k) {
    combineHelper(n, k, 1);
    return result;
}

// 确定递归函数
function combineHelper(n, k, startIndex) {
    // 终止条件
    if(path.length == k) { // 当path的大小=k，说明已经找到组合了
        result.push([...path]);
        return;
    }

    // 单层搜索的逻辑
    for(let i = startIndex; i <= n; i++) { // 遍历整个集合
        path.push(i);
        combineHelper(n, k, i + 1);
        path.pop();
    }
}


console.log(combine(4, 2))