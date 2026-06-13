class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
     const set =new Set(nums);
     let longest = 0;
    if (nums.length === 0) return 0;

     for(const num of set){
        if(!set.has(num-1)){
            let current = num;
            let length =1;

            while(set.has(current+1)){
                current++;
                length++;
            }
          longest= Math.max(longest, length);

        }
     }
     return longest;
    }
}

//nums =[0,1,1,2,3,4,5,6]
// nums = [2,20,4,10,3,4,5] = [2,3,4,5,10,20]