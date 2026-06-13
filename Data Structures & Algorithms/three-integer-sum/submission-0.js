class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        //nums = [-1,0,1,2,-1,-4]
        nums.sort( (a, b)=>a-b);
        //-4,-1,-1,0,1,2

        for(let i= 0; i <nums.length-2; i++){

            //skip the fixed number
            if(i > 0 && nums[i]===nums[i-1]) continue;

            let left = i+1; //-1
            let right = nums.length -1; //2
            while(left <right){

                let sum = nums[i]+ nums[left]+ nums[right]; // -4, -1, 2 = -3, 

                if(sum === 0){
                    result.push([nums[i], nums[left], nums[right]]);

                    // skip duplicates on left
                    while(left <right && nums[left] === nums[left+1]) left++;
                     // skip duplicates on right
                    while(left <right && nums[right] === nums[right -1]) right--;

                    left++;
                    right--;
                }else if(sum < 0){
                    left++;
                }else{
                    right--
                }
            }
        }
        return result;
    }
}
