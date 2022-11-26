var RBS = function (arr, target, start, end) {
    if(start > end){
        return -1
    }
    let mid = Math.floor(start + (end - start) / 2);
    if(arr[mid] === target){
        return mid;
    };

    if(arr[start] <= arr[mid]){
        if(target >= arr[start] && target <= arr[mid]){
            return RBS(arr, target, start, mid-1);
        }else{
            return RBS(arr, target, mid+1, end)
        }
    }
    if(target >= arr[mid] && target <= arr[end]){
        return RBS(arr, target, mid+1, end)
    }   
}
let arr = [5,6,7,8,9,1,2,3]
let target = 3;
console.log(RBS(arr, target, 0, arr.length-1))