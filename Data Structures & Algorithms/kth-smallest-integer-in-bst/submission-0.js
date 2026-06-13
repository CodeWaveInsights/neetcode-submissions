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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let answer = null;

        function inorder(node){
            if(node === null) return;

            inorder(node.left);
            if(answer !==null) return;

            count++;
            if(count ===k){
                answer = node.val;
                return;
            }
            inorder(node.right);
        }
        
        inorder(root);
        return answer;
    }
}
