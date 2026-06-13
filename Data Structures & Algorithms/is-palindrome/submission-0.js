class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //level - 4
        let left = 0;
        let right = s.length-1;
        let alfaNum =/[a-z0-9]/i;
        s = s.toLocaleLowerCase();

        while(left<right){

            while(left<right && !alfaNum.test(s[left])){
                left++;
            }

              while(left<right && !alfaNum.test(s[right])){
                right --;
            }
             // compare characters (case-insensitive)
             if(s[left] !==s[right]){
                return false;
             }
         left++;
        right--;

        }
        return true;
        
    }
}
