/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let bestAnswer = -Infinity;

        function maxGain(node){
        if(node === null) return 0;

        const leftMax=Math.max(0, maxGain(node.left));
        const rightMax=Math.max(0, maxGain(node.right));

        const pathThroughNode =node.val+ leftMax + rightMax;

        bestAnswer = Math.max(bestAnswer, pathThroughNode);

        return node.val+ Math.max(leftMax, rightMax);

        }
        maxGain(root);
        return bestAnswer;
    }
}
