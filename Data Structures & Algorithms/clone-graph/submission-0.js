/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {

        if(!node) return null;

        let map =new Map();

        function dfs(curr){
            if(map.has(curr)){
                return map.get(curr)
            }
        //create clone
        const clone = new Node(curr.val);

        // store before traverssing
        map.set(curr, clone);

       for (let neighbor of curr.neighbors) {
            clone.neighbors.push(dfs(neighbor));

        }
        return clone;
        }
        return dfs(node);
    }

}
