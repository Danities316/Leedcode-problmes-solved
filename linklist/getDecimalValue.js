// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let ans = []
    while(head != null){
        ans.push(head.val)
        head = head.next
    }
    //converting array to integers
    let toInteger = ans.join("")
    return parseInt(toInteger, 2)
    
};