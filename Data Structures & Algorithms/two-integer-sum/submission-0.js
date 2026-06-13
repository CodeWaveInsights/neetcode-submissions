class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * nums = [3,4,5,6], target = 7
     */
    twoSum(nums, target) {
        let map=new Map();
        for(let i = 0; i < nums.length; i++){
            let competent = target -nums[i];  // 4, 3

            if(map.has(competent)){
                return [map.get(competent), i]
            }
            map.set(nums[i], i); // {3: 0, }
        }
    }
}
