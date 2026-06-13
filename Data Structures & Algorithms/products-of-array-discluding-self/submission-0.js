class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n=nums.length;
        const result =new Array(n);

     // calculate the prefix
     result[0] =1;
     for(let i=1; i<n; i++){
        result[i]=result[i-1] * nums[i-1];
     }

     let sufix=1;

     for(let i=n-1; i>=0; i--){
        result[i]*=sufix;
        sufix*=nums[i];
     }
     return result;
    }
}
