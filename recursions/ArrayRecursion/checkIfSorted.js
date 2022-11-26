function isSorted(arr, index){

    //base case
    if(index == arr.length - 1){
        return true
    }
    return arr[index] < arr[index + 1] && isSorted(arr, index + 1)
}

let arr = [1,2,3,4,7,6,8]
console.log(isSorted(arr, 0))