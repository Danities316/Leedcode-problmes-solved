//each individual node
class Node {
    //Reason why next is not given as an argument is becasuse is options
    // it would be a value within other node but it would be null in the tail
constructor(value, next = null){
    this.value = value;
    this.next = next
}
}

class LinkList {
    constructor(){
        this.head = null
        this.size = 0
    }
     // some LinkedList methods to be implemented
    // insertAtFirst
    insertFirst(value){
        this.head = new Node(value, this.head)
        this.size++
    }
    //InsertLast
    insertLast(value){
        let node = new Node(value)
        let current;
        // if empty, make it head
        if(!this.head){
            this.head = node
        }else{
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
       
    }
    //Get element
    // RemoveElement
    //Clear list
    //Print list value


    // Insert elements
    
    // isEmpty
    // size_Of_List


    // PrintList
    printValue(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }

}
let li = new LinkList()
li.insertFirst(5)
li.insertFirst(3)
li.insertFirst(6)
li.insertLast(7)

// console.log(li)
li.printValue()