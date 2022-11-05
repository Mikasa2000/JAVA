function subsets(nums) {
    let res = new Array();
    let path = new Array();

    function backtracking(startIndex) {
        res.push(path.slice());
        for(let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);
            backtracking(i + 1);
            path.pop();
        }
    }
    backtracking(0);
    return res;
}

console.log(subsets([1,2,3]));