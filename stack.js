function Stack(){
    //Creating an array for our elements
   let items = [];

   //Creating a function to push elements to the top of our array items
function addStack(elements){
    items.push(elements);

};

//creating a pop(delete) function to remove the topmost element in the array
function removeStack(){
    items.pop();
};
// Return the topmost element in the array
function peek(){
    //subtracting -1 from the length of an item returns the last element in the arrays
    return items[items.length-1];
};

function isEmpty(){
    // if(items.length == 0){
    //     return false;
    // }
    return items.length == 0;
};

function size(){
    return items.length;
};

function clear(){
    return items = [];
};
   return {
       addStack,
       removeStack,
       peek,
       isEmpty,
       size,
       clear
   }
}

const newStack = new Stack();
newStack.addStack('bob')
newStack.addStack('love')
newStack.addStack('hi')

console.log(newStack.size())//3
console.log(newStack.peek())// hi
console.log(newStack.isEmpty()) // false

console.log(newStack.removeStack()) // hi
