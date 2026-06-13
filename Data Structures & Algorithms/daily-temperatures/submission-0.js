class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    //[30,38,30,36] = [1,0,1,0]
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let result = new Array(n).fill(0); //[0,0,0,0]
        let stack = [];

        for(let i= 0; i < n; i++){ 
            while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
                const idx = stack.pop();
                result[idx] = i - idx;
            }
            stack.push(i);
        }
        return result;
    }
}
