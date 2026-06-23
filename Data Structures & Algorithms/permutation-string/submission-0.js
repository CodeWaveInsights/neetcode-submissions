class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     * 
     * 
     * s1 = "ab"
     * s2 = "eidbaooo"
     * permutation of s1 : ab, ba
     * 
     * 
     * 
     */
    checkInclusion(s1, s2) {
        //edge case
        if(s1.length > s2.length) return false;

        const a = new Array(26).fill(0);
        const base = 'a'.charCodeAt(0);

    for (let i = 0; i < s1.length; i++) {
       a[s1.charCodeAt(i)-base]++;
       a[s2.charCodeAt(i)-base]--;
    }
     // if all zeros -> first window is a match
    if (a.every(v => v === 0)) return true;

    for (let i = s1.length; i < s2.length; i++) {
    a[s2.charCodeAt(i)-base]--;
    a[s2.charCodeAt(i - s1.length)-base]++;
    if (a.every(v => v === 0)) return true;
    }
     return false;
 }
}
// brute force approach
function purePermutation(s1, s2) {
    if (s1.length > s2.length) return false;




}
