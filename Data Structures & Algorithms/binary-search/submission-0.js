class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //nums = [-1,0,2,4,6,8]        winget install --id Git.Git -e --source winget        winget install --id Git.Git -e --source winget

        let left = 0;
        let right = nums.length-1;

        while(left <=right){
            let mid = Math.floor((left+right)/2);

            if(nums[mid]===target){
                return mid;
            }

            if(nums[mid] < target){
                left = mid+1
            }else{
                right =mid-1;
            }
        }
        return -1;
    }
}

const solution = new Solution();
const searchItem = solution.search([-1,0,2,8,1,6], 2);
console.log(searchItem);