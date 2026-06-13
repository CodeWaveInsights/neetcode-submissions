class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const counts = new Array(26).fill(0);
        const base = 'A'.charCodeAt(0);

        let left = 0;
        let maxCount = 0;
        let best = 0;

        for (let right = 0; right < s.length; right++) {
    const idx = s.charCodeAt(right) - base;
    counts[idx] += 1;

    // update maxCount when adding new char
    if (counts[idx] > maxCount) maxCount = counts[idx];

    // If current window needs more than k replacements, shrink it
    while ((right - left + 1) - maxCount > k) {
      counts[s.charCodeAt(left) - base] -= 1;
      left += 1;
      // we DO NOT decrease maxCount here (keeps linear time)
    }

    // window is valid -> update best
    best = Math.max(best, right - left + 1);
  }

  return best;


    }
}
