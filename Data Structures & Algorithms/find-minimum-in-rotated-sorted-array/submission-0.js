class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //Input: nums = [3,4,5,6,1,2]
        //Output: 1

        let left = 0;
        let right = nums.length-1;

        while(left < right){
            let mid = Math.floor((left+right)/2);

            if(nums[mid]>nums[right]){
                left = mid+1;
            }else{
                right =mid;
            }
        }
        return nums[left];
    }
}
