let res = new Array();
let path = new Array();

function combine(n, k) {
    backtracking(n, k, 1);
    return res;
}


function backtracking(n, k, startIndex) {
    if(path.length == k) {
        res.push([...path]);
        return;
    }

    for(let i = startIndex; i <= n; i++) {
        path.push(i);
        backtracking(n, k, startIndex + 1);
        path.pop();
    }
}