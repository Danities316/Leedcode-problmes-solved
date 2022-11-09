// https://leetcode.com/problems/reverse-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let temp = null
    let newhead = null
    if(!head){
        return head
    }
    while(head != null){
     let temp = head
     head = head.next
     temp.next = newhead
     newhead = temp
    }
    return newhead
};