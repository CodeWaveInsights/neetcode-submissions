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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        // 1. Find the middle (slow will be at mid)
        let slow = head;
        let fast = head;

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. Reverse the second half
        let second = slow.next;
        slow.next = null; // cut the list into two halves

        let prev = null;
        let curr = second;

        while (curr) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        second = prev; // head of reversed second half

        // 3. Merge the two lists
        let first = head;
        let secondPtr = second;

        while (secondPtr) {
            let t1 = first.next;
            let t2 = secondPtr.next;

            first.next = secondPtr;
            secondPtr.next = t1;

            first = t1;
            secondPtr = t2;
        }
    }
}
