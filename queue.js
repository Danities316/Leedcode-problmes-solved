//Programme to implement queue data structure

class Queue {
    constructor(){
        this.items = [];
    }

    //add elements to the queue - enqueue
    addQueue(elements){
        return this.items.push(elements) // push the elements into the empty array(items)
    }

    //Remove element from the queue - dequeue
    RemoveQueue(){
        if(this.items.length > 0){
            return this.items.shift(); // if there is an elements in the array(items) remove the front item
        }
    }
    //View the last element in the queue - peek
    peek(){
        return this.items[this.items.length -1]; //Return the last elements by subtracting -1
    }

    //Check if the queue is empty
    isEmpty(){
        return this.items.length == 0;
    }

    //The size of the queue  - size
    size(){
        return this.items.length;
    }

    //Empt the entire queue
    clear(){
        this.items = [];
    }
}

let newQueue = new Queue();

// Adding elements to the array
newQueue.addQueue('abel');
newQueue.addQueue('sam');
newQueue.addQueue('musa');
newQueue.addQueue('UD');
console.log(newQueue.items)

//The size of the array
console.log(`The size of the array is: ${newQueue.size()}`);

//Removing the last items
newQueue.RemoveQueue();
console.log(newQueue.items)

//view the last element in the array
console.log(`The last element in the array is: ${newQueue.peek()}`);

//Empty the array
console.log(`Is the array empty: ${newQueue.isEmpty()}`);


