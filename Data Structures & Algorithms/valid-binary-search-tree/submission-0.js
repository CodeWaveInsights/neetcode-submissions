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
    isValidBST(root) {
        function validate(node, minValue, maxValue){
            if(node === null) return true;

            if(node.val <= minValue || node.val >= maxValue){
                return false;
            }
            
            // Left subtree must be < node.val
            const leftIsValid = validate(node.left, minValue, node.val);
            // right subtree must be > node.val
            const rightIsValid = validate(node.right, node.val, maxValue);

            return leftIsValid && rightIsValid;
        }
        return validate(root, -Infinity, Infinity);
    }
}
