class Node {
    ;

    //Reason why next is not given as an argument is becasuse is options
    // it would be a value within other node but it would be null in the tail
constructor(value){
    this.value = value;
    this.next = null
}
}

class LinkList {
    constructor(){
        this.head = null
        this.size = 0
    }
     // functions to be implemented
    // add(element)
    // insertAt(element, location)
    inserAt(element, location) {
        if(location < 0 || location > this.value){
            return console.log("Please return a valid index number")
        }else{
            //create a new node
            var node = new Node(element)
            var current, previous;
            current = this.head

            //add the element to the first index
            if(location == 0){
                node.next = this.head
                this.head = node
            }else{
                current = this.head
                var count = 0

                //iterate over the list to find the position to insert
                while(count < location){
                    count++
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            this.size++
        }
    }
    // removeFrom(location)
    // removeElement(element)
 
    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList
}