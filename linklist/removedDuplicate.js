// quetions : https://leetcode.com/problems/remove-duplicates-from-sorted-list/

function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }

function removeDuplacate(head) {
    if(!head){
        return head
    }
    let cur = head
    while(cur != null){
        if(cur.value == cur.next.value){
            cur.next = cur.next.next
        }else{
            node = node.next
        }
    }
    return head
}