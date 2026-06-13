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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(root === null) return "null";
        const result = [];
        const queue = [root];

        while(queue.length >0){
            const currentNode =queue.shift();

            if(currentNode ===null){
                result.push("null");
                continue;
            }
            result.push(String(currentNode.val));
            queue.push(currentNode.left);
            queue.push(currentNode.right);
        }
        return result.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (data === "null") {
      return null;
    }

    const values = data.split(",");
    let index = 0;

    // Create root
    const rootValue = Number(values[index]);
    const rootNode = new TreeNode(rootValue);
    index++;

    const queue = [rootNode];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      // Read left value
      const leftValue = values[index];
      index++;

      if (leftValue !== "null") {
        currentNode.left = new TreeNode(Number(leftValue));
        queue.push(currentNode.left);
      }

      // Read right value
      const rightValue = values[index];
      index++;

      if (rightValue !== "null") {
        currentNode.right = new TreeNode(Number(rightValue));
        queue.push(currentNode.right);
      }
      
    }
return rootNode;
    
  }
      
}
