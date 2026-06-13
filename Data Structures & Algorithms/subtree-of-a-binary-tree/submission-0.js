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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(root ===null) return false;

        if(isSame(root, subRoot)) return true;

        return (this.isSubtree(root.left, subRoot) || (this.isSubtree(root.right,subRoot)));

       function isSame(p, q){
            if(p ===null && q ===null) return true;
            if(p ===null || q ===null) return false;

            if(p.val !==q.val) return false;

            const leftSame =isSame(p.left, q.left);
            const rightSame =isSame(p.right, q.right);

            return leftSame && rightSame;
        }
    }
}
