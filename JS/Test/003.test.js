/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let right = 0;
  let left = 0;
  let set = new Set();
  let maxLength = 0;

  while(right < s.length) {
      set.add(s.charAt(right));

      while(set.has(s.charAt(right))) {
          set.delete(s.charAt(left));
          left++;
      }

      if(!set.has(s.charAt(right))) {
          maxLength = Math.max(maxLengrh,set.size);
      }
      right++;
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));