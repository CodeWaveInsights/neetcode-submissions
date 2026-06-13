class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const map = { ")": "(", "}": "{", "]": "[" };

        for(let ch of s){
            if(ch in map){
                if(stack.pop() !==map[ch]) return false;
            }else{
                stack.push(ch);
            }
        }
         return stack.length ===0;
    }
}
