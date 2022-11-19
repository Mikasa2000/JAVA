function lengthOfLongestSubstring(s) {
  const set = new Set();
  let left = 0;
  let right = 0;
  let maxLength = 0;

  while(right < s.length) {
    // 如果set没有这个数字，并且这个数字存在
    while(!set.has(s.charAt(right)) && s.charAt(right)) {
      set.add(s.charAt(right));
      right++;
    }

    maxLength = Math.max(maxLength, set.size);
    // 不满足某个条件
    if(set.has(s.charAt(right))) {
      set.delete(s.charAt(left));
      left++;
    }
  }

  return maxLength;
}