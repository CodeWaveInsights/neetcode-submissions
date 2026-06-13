class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = "";
        for(let str of strs){
            encode +=str.length+ "#" + str;
        }
        return encode;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        //1. pointer will at start
        //extract length
        //extrat the word
        //preserve the result
        //move the pointer
        //return the result

        let i=0;
        while(i < str.length){
            let j= i;

          while(str[j] !== "#") j++;
   
           const length=parseInt(str.slice(i,j));
           const word = str.slice(j+1, j+1+length);
           result.push(word);
           //move the pointer
           i=j+1+length;

        }
        return result;
    }
}
