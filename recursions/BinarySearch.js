//Using recursion to solve binary search problems

const binarSearch = (arr, target, start, end) => {
    if(start > end){
        return -1
    }
    let middle = start + (end - start) / 2;
    if(arr[middle] == target){
        return middle
    }
    if(target < arr[middle]){
       return binarSearch(arr, target, start, middle - 1)
    }
    return binarSearch(arr, target, middle + 1, end)
}

let arr = [1,2,3,4,55,66,79]
let target = 79
console.log(binarSearch(arr, target, 0, arr.length - 1))