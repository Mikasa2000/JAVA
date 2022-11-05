/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    const occ = new Set(); // 滑动窗口
    // 右指针，初始值为-1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = 0;
    let ans = 0; // 记录最终结果
    let i = 0;
    // i就是左指针
    while(i < s.length) {
        if(i != 0) {
            // 左指针向右移动一格，移除最前面那个字符
            occ.delete(s.charAt(i - 1));
        }

        // 右指针没有结尾，occ里面不存在
        while(rk < s.length && !occ.has(s.charAt(rk))) { 
            // 不断地移动右指针，将rk对应的字符加入occ
            occ.add(s.charAt(rk));
            rk++;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i); // 记录字符串长度
        ++i;
    }

    return ans;
};

console.log(lengthOfLongestSubstring("abcabcbb"));