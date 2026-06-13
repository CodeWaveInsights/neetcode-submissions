class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
         let deque = []; // stores indices

  for (let i = 0; i < nums.length; i++) {

    // STEP 1
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // STEP 2
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // STEP 3
    deque.push(i);

    // STEP 4
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
    }
}
