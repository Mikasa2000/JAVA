const res = [], path = [];


function permute(nums) {
    backtracking(nums, nums.length, []);
    return res;
}


function backtracking(n, k, used) {
    // 递归中止条件
    if(path.length == k) {
        res.push([...path]);
        return;
    }

    for(let i = 0; i < k; i++) {
        if(used[i]) continue;
        path.push(n[i]);
        used[i] = true;
        backtracking(n, k, used);
        path.pop();
        used[i] = false;
    }
}

console.log(permute([1,2,3]));