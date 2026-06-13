class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left =0; 
        let right = nums.length-1;
        //nums = [3,4,5,6,1,2], target = 1
                //0 1 2 3 4 5 , mid =2 -->5

        while(left <=right){

                    let mid = Math.floor((left+right)/2);
                    let midValue =nums[mid];

                    if(midValue===target) return mid;

      //check if left portion is sorted

      if(nums[left] <=midValue){
        if(nums[left] <= target && target <midValue){
            right =mid-1;
        }else{
            left =mid+1;
        }
      } else{
        //right portions
        if(midValue < target && target <=nums[right]){
            left = mid+1;
        }else{
            right = mid-1;
        }
      }       
     }
     return -1;
    }
}
