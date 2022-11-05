let res = new Array();
let path = new Array();

function subsets(nums) {
    if(nums.length == 0) {
        res.push([]);
        return res;
    }
    backtracking(nums, 0);
    return res;

}
function backtracking(nums, startIndex) {
    res.push([...path]);
    if(startIndex >= nums.length) {
        return;
    }
    for(let i = startIndex; i < nums.length; i++) {
        path.push(nums[i]);
        backtracking(nums, i + 1);
        path.pop();
    }
}

console.log(subsets([1,2,3]));