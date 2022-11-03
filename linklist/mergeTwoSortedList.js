 function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }


function mergeTwoSortedList(list1, list2) {
    let temp = new ListNode()
    let tail = temp

    while(list1 != null && list2 != null){
        if(list1.val < list2.val){
            tail.next = list1
            list1 = list1.next
        }else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }

    if(list1 != null ){
        tail.next = list1

    }else if(list2 != null){
        tail.next = list2
    }
    return temp.next
}