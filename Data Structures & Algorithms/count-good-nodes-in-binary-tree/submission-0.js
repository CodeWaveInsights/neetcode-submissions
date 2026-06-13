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
    goodNodes(root) {
        let count = 0;

        function dfs(node, maxSoFar){
            if(node === null) return;
            
            if(node.val >= maxSoFar){
                count++;
            }

            const newMax = Math.max(maxSoFar, node.val);

            dfs(node.left, newMax);
            dfs(node.right, newMax);
        }
        dfs(root, root.val);
        return count;
    }
}
