class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * nums = [3,4,5,6], target = 7
     */
    twoSum(nums, target) {
        // let map=new Map();
        // for(let i = 0; i < nums.length; i++){
        //     let competent = target -nums[i];  // 4, 3

        //     if(map.has(competent)){
        //         return [map.get(competent), i]
        //     }
        //     map.set(nums[i], i); // {3: 0, 4: 1, 5: 2, 6: 3}
        // }

        // for(let i = 0; i < nums.length; i++){
        //     for(let j = i + 1; j < nums.length; j++){
        //         if(nums[i] + nums[j] === target){
        //             return [i, j];
        //         }
        //     }
        // }

        let map =new Map();
        for(let i=0; i<nums.length; i++){
            let complement = target - nums[i];
            if(map.has(complement)){
                return [map.get(complement), i];
            }
            map.set(nums[i], i);
        }
    }
}

let solution = new Solution();
console.log(solution.twoSum([3,4,5,6], 9));