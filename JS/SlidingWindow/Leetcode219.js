/**
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，
 * 满足 nums[i] == nums[j] 且 abs(i - j) <= k 。
 * 如果存在，返回 true ；否则，返回 false 。
 *输入：nums = [1,2,3,1], k = 3
 *输出：true
 *
 * nums = [1,2,3,1,2,3], k = 2
 * */


function containsNearbyDuplicate(nums, k) {
    const set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) {
            // 代表找到了重复的元素
            return true;
        }

        set.add(nums[i]); // 没有找到就加入set扩大窗口
        while(set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    return false;
}

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));

// let mySet = new Set();
//
// mySet.add(1); // Set [ 1 ]
// mySet.add(5); // Set [ 1, 5 ]
// mySet.add(5); // Set [ 1, 5 ]
//
// console.log(mySet);


