// https://leetcode.com/problems/linked-list-cycle-ii/


//  Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
      this.next = null;
  }
// Find lenght of the cycle
  var lengthCycle = function(head) {
    let fast = head
    let slow = head

    while(fast != null && fast.next != null ){
        fast = fast.next.next
        slow = slow.next
        if(fast == slow){
            // calculate the length
            let temp = slow
            let lenght = 0
            
            do{
                temp = temp.next
                length++
            }while(temp != slow)

            return lenght
        }
    }
    return 0
};

 
  var detectCycle = function(head) {
    let fast = head
    let slow = head
    let length = 0

    while(fast != null && fast.next != null){
        fast = fast.next.next
        slow = slow.next

        //finding the length of the cycle
        if(fast == slow){
            length = lengthCycle(slow)
            break
        }
    }

    //if no cycle is present return 0
    if(length == 0){
        return null
    }

    // find the start node
    let f = head
    let s = head
    
    //
    while(length > 0){
        s = s.next
        length--
    }
    //Keep moving forward until they(both s and f) met at cycle start
    while(f != s){
        f = f.next
        s = s.next
    }
    return s
  }


//   var detectCycle = function(head) {
//   var fast = head, slow = head;
//     while (fast && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//         if (fast == slow) {
//             break;
//         }
//     }
    
//     if (!fast || !fast.next) {
//         return null;
//     }

//     while(head != slow) {
//         head = head.next;
//         slow = slow.next;
//     }
    
//     return slow;
// }