function insertRec(value, index, node) {
    if(index == 0){
        let temp = new Node(value, node)
    }
    
}

class Node {
    //Reason why next is not given as an argument is becasuse is options
    // it would be a value within other node but it would be null in the tail
constructor(value){
    this.value = value;
    this.next = null
}
}