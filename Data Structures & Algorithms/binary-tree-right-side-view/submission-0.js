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
     * @return {number[]}
     */
    rightSideView(root) {
    const result = [];

    // Edge case: empty tree
    if (root === null) {
      return result;
    }

    // Queue for level order traversal
    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
      const levelSize = queue.length;

      // Process all nodes in the current level
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();

        // If this is the last node of the level
        if (i === levelSize - 1) {
          result.push(currentNode.val);
        }

        // Add children to queue
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }

        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
    }

    return result;
  }
}