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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if(!head || k <=1) return head;

        //check if we have k nodes from head;
        let count =0;
        let cursor =head;

        while(cursor && count <k){
            cursor =cursor.next;
            count++;
        }

        if(count <k){
            return head;
        }
        //reverse first k nodes
        let cur= head;
        let prev, next= null;
        count = 0;

        while(cur && count <k){
            next=cur.next;
            cur.next=prev;
            prev=cur;
            cur=next;
            count++;
        }

        //Recursivly process the rest and connect
        head.next = this.reverseKGroup(cur, k);
        return prev;
    }
}
