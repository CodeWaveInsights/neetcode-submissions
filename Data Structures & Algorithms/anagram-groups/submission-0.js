class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map =new Map();
        for(let str of strs){
            let count =new Array(26).fill(0);

            for(let ch of str){
                count [ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
            }
            const key = count + '#';

            if(!map.has(key)){
                map.set(key, []);
            }
            map.get(key).push(str);
        }
        return Array.from(map.values());
    }
}
