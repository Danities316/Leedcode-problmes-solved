//Linear search using Recursion

function findElement(arr, target, index) {
    //base case
    if(index == arr.length){
        return false
    }
    return arr[index] == target || findElement(arr, target, index + 1)
    
}

function findElementIndex(arr, target, index) {
    //base case
    if(index == arr.length){
        return -1
    }if(arr[index] == target){
        return index
    }else{
        return findElementIndex(arr, target, index + 1)
    }
  
    
}

function findElementIndexLast(arr, target, index) {
    //base case
    if(index == -1){
        return -1
    }if(arr[index] == target){
        return index
    }else{
        return findElementIndexLast(arr, target, index - 1)
    }
  
    
}

let arr = [1,2,3,4,7,6,8]
console.log(findElement(arr, 7, 0))
console.log(findElementIndex(arr, 7, 0))
console.log(findElementIndexLast(arr, 7, arr.length-1))