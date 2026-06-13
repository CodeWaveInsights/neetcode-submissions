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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy =new ListNode(0);
        let tail=dummy;
        let a =list1;
        let b =list2;

        while(a!==null && b!==null){
            if(a.val <b.val){
                tail.next = a;
                a=a.next;
            }else{
                tail.next=b;
                b=b.next;
            }
            tail =tail.next;
        }
         if(a!==null) tail.next=a;
         if(b!==null) tail.next=b;

         return dummy.next;
    }
}
