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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let current = dummy;

        let p1 = l1;
        let p2 = l2;

        let carry = 0;

        // Loop until both lists are done and no carry remains
        while (p1 !== null || p2 !== null || carry !== 0) {

            // values from l1 & l2 (0 if one list ended)
            let val1 = (p1 !== null) ? p1.val : 0;
            let val2 = (p2 !== null) ? p2.val : 0;

            // sum of digits + carry
            let sum = val1 + val2 + carry;

            // new digit for result list
            let newDigit = sum % 10;

            // update carry
            carry = Math.floor(sum / 10);

            // create new node with the computed digit
            let newNode = new ListNode(newDigit);

            // attach to result list
            current.next = newNode;

            // move current forward
            current = newNode;

            // move pointers p1 and p2
            if (p1 !== null) p1 = p1.next;
            if (p2 !== null) p2 = p2.next;
        }

        // head of result list
        return dummy.next;
    }
}
