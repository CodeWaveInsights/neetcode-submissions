class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //[1,7,2,5,4,7,3,6]
        let left = 0;
        let right = heights.length-1;
        let maxArea = 0;

        while(left <right){
            let width = right-left; 
            let currentHeight = Math.min(heights[left], heights[right]);
            const currentArea= width * currentHeight;

            if(currentArea > maxArea){
                maxArea =currentArea;
            }

            if(heights[left] < heights[right]){
                left++;
            }else{
                right--;
            }
        }
        return maxArea;
    }
}
