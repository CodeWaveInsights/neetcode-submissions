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
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = [];

        if(root ===null) return result;

        //Queue for BFS
        const queue = [];
        queue.push(root);

        //keep processing until queue becomes empty

        while(queue.length > 0){

            const levelSize  = queue.length;

            const currentLevel = [];

            for(let i=0; i<levelSize; i++){
                const currentNode = queue.shift();

                currentLevel.push(currentNode.val);

                // Add left child if exists
                if(currentNode.left !== null){
                    queue.push(currentNode.left);

                }

                if(currentNode.right !==null){
                    queue.push(currentNode.right);
                } 
            }
            result.push(currentLevel);
        }
        return result;
    }
}
