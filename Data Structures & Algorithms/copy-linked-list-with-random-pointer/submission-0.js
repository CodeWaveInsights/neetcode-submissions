// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        // Handle empty list
    if (head === null) return null;

    // 1. Create a map to store: originalNode -> clonedNode
     const nodeMap = new Map();

    // 2. First pass:
    // Create all new nodes (values only), store mapping
    let oldNode = head;

    while (oldNode !== null) {
        const newNode = new Node(oldNode.val, null, null);  // cloned node
        nodeMap.set(oldNode, newNode);
        oldNode = oldNode.next;
    }

    // 3. Second pass:
    // Assign next and random pointers to the cloned nodes
    oldNode = head;

    while (oldNode !== null) {
        const newNode = nodeMap.get(oldNode);      // cloned node

        // Set the 'next' pointer
        newNode.next = oldNode.next 
            ? nodeMap.get(oldNode.next) 
            : null;

        // Set the 'random' pointer
        newNode.random = oldNode.random 
            ? nodeMap.get(oldNode.random) 
            : null;

        oldNode = oldNode.next;
    }

    // 4. The head of the cloned list is nodeMap.get(head)
    const newHead = nodeMap.get(head);
    return newHead;
}
};