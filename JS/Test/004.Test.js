function lengthOfLongestSubstring(s) {
  const set = new Set();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while(right < s.length) {
    // 扩大窗口，且需要条件
    while(!set.has(s[right]) && s[right]) {
        set.add(s[right]);
        right++;
    }

    maxLength = Math.max(maxLength, right - left);
    if(set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    
  }
  return maxLength;
}

lengthOfLongestSubstring("");