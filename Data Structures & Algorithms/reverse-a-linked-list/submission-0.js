/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
      let prev = null;
      let current = head;
      let next;

      //Traverse all the node of the linkedList
        while(current !== null){
            next = current.next;
            //reverse current node as next pointer
            current.next = prev;
             // move pointers one position ahead
            prev = current;
            current = next;
        }
        return prev;
    }
}
