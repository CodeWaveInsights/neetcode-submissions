class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //set the frequence
        let freqMap = new Map();

        for(let num of nums){
            freqMap.set(num, (freqMap.get(num) || 0 )+1);
        }

        //create the buckets
        const bucket = Array(nums.length+1).fill().map(() =>[]);

        for(let [num, freq] of freqMap){
            bucket[freq].push(num);
        }
      // Step 3: Collect top k
      const result = [];
      for(let i= bucket.length-1; i >=0 &&result.length <k; i--){
        for(let num of bucket[i]){
            result.push(num);
             if (result.length === k) break;
        }
      }
       return result;
    }
}
