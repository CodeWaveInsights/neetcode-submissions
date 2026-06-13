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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inorderIndexMap = new Map();
        
        for(let i=0; i<inorder.length; i++){
            inorderIndexMap.set(inorder[i], i);
        }
        let preorderIndex=0;

        function buildSubTree(inLeft, inRight){
            if(inLeft > inRight){
                return null;
            }

            const rootvalue = preorder[preorderIndex];
            preorderIndex++;

            const rootNode =new TreeNode(rootvalue);

            const rootInorderIndex=inorderIndexMap.get(rootvalue);

            rootNode.left = buildSubTree(inLeft, rootInorderIndex-1);
            rootNode.right = buildSubTree(rootInorderIndex+1, inRight);

            return rootNode;

        }
        return buildSubTree(0, inorder.length-1)
        
    }
}
