
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
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;

    // Pairwise merge lists until only one remains
    while (lists.length > 1) {
      const mergedLists = [];

      for (let i = 0; i < lists.length; i += 2) {
        const list1 = lists[i];
        const list2 = (i + 1 < lists.length) ? lists[i + 1] : null;

        const merged = this.mergeTwoLists(list1, list2);
        mergedLists.push(merged);
      }

      // Prepare for next iteration
      lists = mergedLists;
    }

    return lists[0];
  }

  /**
   * Merge two sorted linked lists
   * @param {ListNode|null} l1
   * @param {ListNode|null} l2
   * @return {ListNode|null}
   */
  mergeTwoLists(l1, l2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;

    let p1 = l1;
    let p2 = l2;

    // Merge while both lists have nodes
    while (p1 !== null && p2 !== null) {
      if (p1.val < p2.val) {
        current.next = p1;
        p1 = p1.next;
      } else {
        current.next = p2;
        p2 = p2.next;
      }
      current = current.next;
    }

    // Attach the remaining nodes
    if (p1 !== null) {
      current.next = p1;
    } else if (p2 !== null) {
      current.next = p2;
    }

    return dummyHead.next;
  }
}
