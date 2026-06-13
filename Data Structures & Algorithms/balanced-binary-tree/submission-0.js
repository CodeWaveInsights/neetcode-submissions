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
     * @return {boolean}
     */
    isBalanced(root) {
        function getHeightOrUnbalanced(node){
            if(node ===null) return 0;

            const leftHeight = getHeightOrUnbalanced(node.left);

            if(leftHeight === -1) return -1;

            const rightHeight = getHeightOrUnbalanced(node.right);
            if(rightHeight === -1) return -1;

            const heightDifference = Math.abs(leftHeight-rightHeight);

            if(heightDifference >1) return -1;

            //return if height is balanced

            return 1+ Math.max(leftHeight, rightHeight);
        }
        return getHeightOrUnbalanced(root) !== -1;
    }
}
