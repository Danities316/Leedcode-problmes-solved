// class ListNode {
//     constructor(value, next = null){
//         this.value = value
//         this.next = next
//     }
// }

// var hasCycle = function(head){
//     let fast = head
//     let slow = head

//     while(fast != null && fast.next != null){
//         fast = fast.next.next
//         slow = slow.next

//         if(fast == slow){
//             return "cycle is found"
//         }

//         return "no cycle found"
//     }
// }

// var cycleLength = function(head){
//     let fast = head
//     let slow = head
//     let lenght = 0

//     while(fast != null && fast.next != null){
//         fast = fast.next.next
//         slow = slow.next

//         if(fast == slow){
//             let temp = slow
//             do {
//                 temp = temp.next
//                 lenght++
//             } while (temp != slow); 
//             return length
//         }

//         return 0
// }
function search(arr, target, start, end) {
  
     
    if(start > end){
        return -1
    }
    let middle =Math.trunc(start + (end - start) / 2);

    if(arr[middle] == target){
        return middle
    }
    if(arr[middle] > target){
        return search(arr, target, start, middle + 1)
    }
    return search(arr, target, middle - 1, end)
}


let arr = [1,2,3,4,55,66,79]
let target = 79
console.log(search(arr, target, 0, arr.length - 1))
