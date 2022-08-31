
const floor = (arr, target) =>{
    let start = 0;
    let end = arr.length - 1;
// return the index:  smallest greatest number than or equals to target 
    while (start <= end){
       let mid = Math.trunc(start + (end - start) / 2);
    //    console.log(mid);
       if(target > arr[mid]){
           start = mid + 1;
       }else if(target < arr[mid]){
           end = mid - 1;
       }else{
           return mid
       }
    }   
    return end;
}
const arr = [10,11,14,16,18,20,22,24]
console.log(floor(arr, 11));