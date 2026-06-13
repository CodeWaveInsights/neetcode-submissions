class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];

        function backtrack(startIndex, currentSubset){
            result.push([...currentSubset]);

            for(let i = startIndex; i< nums.length; i++){
                //choose
                currentSubset.push(nums[i]);

               // explosure
                backtrack(i+1, currentSubset);

                //unchoose
                currentSubset.pop();

            }
        }
        backtrack(0, []);
         return result;
        
    }
}
