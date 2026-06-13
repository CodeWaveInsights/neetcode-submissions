
class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    const arr = [...heights, 0];
    const stack = []; // stack of indices with non-decreasing heights
    let maxArea = 0;

    for (let i = 0; i < arr.length; i++) {
      const currentHeight = arr[i];
      // Maintain a strictly increasing stack of heights (by index)
      while (stack.length > 0 && currentHeight < arr[stack[stack.length - 1]]) {
        const topIndex = stack.pop();
        const height = arr[topIndex];

        // If stack is empty, rectangle spans from 0..i-1; else from (stack top + 1)..(i - 1)
        const leftBoundaryIndex = stack.length > 0 ? stack[stack.length - 1] : -1;
        const width = i - leftBoundaryIndex - 1;

        const area = height * width;
        if (area > maxArea) {
          maxArea = area;
        }
      }

      // Push current index after popping taller bars
      stack.push(i);
    }

    return maxArea;
  }
}
