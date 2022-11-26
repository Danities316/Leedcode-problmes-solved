var bubbleSort = function (arr, row, col) {
    if(row == 0){
        return
    }
    if(col < row){
        
        if(arr[col] > arr[col + 1]){
            //swap
            let temp = arr[col]
            arr[col] = arr[col + 1]
            arr[col + 1] = temp
        }
        bubbleSort(arr, row, col + 1)
    }else{
    
        bubbleSort(arr, row - 1, 0)
    }
}
arr = [4,3,2,1]
console.log(bubbleSort(arr, arr.length - 1, 0))