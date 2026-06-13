class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length-1;
        let alfaNum = /[a-z0-9]/i;

        while(left < right){
         while(left < right && !alfaNum.test(s[left])){
                left++;
            }

              while(left < right && !alfaNum.test(s[right])){
                right--;
            }
            //check the case sensitive
            if(s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
