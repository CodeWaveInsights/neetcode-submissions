class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLen = 0;
        let seen =new Set();

        for(let right = 0; right < s.length; right ++){
            while(seen.has(s[right])){
                seen.delete(s[left]);
                left++;
            }
            seen.add(s[right]);

            maxLen = Math.max(maxLen, right - left+1);
        }
          return maxLen;
    }
}
