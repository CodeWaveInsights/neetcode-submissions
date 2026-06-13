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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //Input: head = [1,2,3,4], n = 2  
        //Output: [1,2,4]

        let dummy = new ListNode(0, head);
        let slow = dummy;
        let fast = dummy;
        //move the pointer n+1 step ahead
        for(let  i=0; i<n+1; i++){
            fast =fast.next;
        }
        // move the both pointer unit reach to the end
        while(fast !==null){
            slow = slow.next;
            fast = fast.next;
        }

        //delte the slow.next node or skip it.
        slow.next = slow.next.next;
       // return the actual node

       return dummy.next;
    }
}
