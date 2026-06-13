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
   * Reorder list in-place: L0→Ln→L1→Ln-1→...
   * @param {ListNode} head
   * @return {void}
   */
  reorderList(head) {
    // Edge cases: empty list or single node -> nothing to do
    if (head === null || head.next === null) return;

    // ----- Step 1: Find end of first half (slow will point to it) -----
    // Start fast one node ahead so slow stops at end of first half consistently
    let slow = head;
    let fast = head.next;

    // Move fast by two and slow by one
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    // Now slow is at the end of the first half. second half begins at slow.next

    // ----- Step 2: Split and reverse the second half -----
    let second = slow.next; // head of second half
    slow.next = null;       // terminate first half

    // Reverse the second half (standard iterative reverse)
    let prev = null;
    let curr = second;
    while (curr !== null) {
      const nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    // prev is now the head of reversed second half
    second = prev;

    // ----- Step 3: Merge the two halves alternatingly -----
    let first = head;
    while (second !== null) {
      const temp1 = first.next;
      const temp2 = second.next;

      // weave
      first.next = second;
      second.next = temp1;

      // move pointers forward
      first = temp1;
      second = temp2;
    }
  }
}
