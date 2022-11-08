class ListNode {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

var hasCycle = function(head){
    let fast = head
    let slow = head

    while(fast != null && fast.next != null){
        fast = fast.next.next
        slow = slow.next

        if(fast == slow){
            return "cycle is found"
        }

        return "no cycle found"
    }
}

var cycleLength = function(head){
    let fast = head
    let slow = head
    let lenght = 0

    while(fast != null && fast.next != null){
        fast = fast.next.next
        slow = slow.next

        if(fast == slow){
            let temp = slow
            do {
                temp = temp.next
                lenght++
            } while (temp != slow); 
            return length
        }

        return 0
}


