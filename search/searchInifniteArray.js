https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/

function infiniteArraysSearch (arr, target){

    //find the range
 // start iterating in chunk of 2 since we dont know what is start and end
 let start = 0;
 let end = 1;

 // condition for the target to lie in the range
 while(target > arr[end]){
    //The new start in each iteration
    let newStart = end + 1;
    //double the chunck value
    //end = previous end + sizeOfChunck *2
    end = end + (end - start + 1) * 2;
    start = newStart;
 }
 return binarySearch(arr, target, start, end);
}



function binarySearch(arr, target, start, end) {
    while (start <= end){
       let mid = Math.trunc(start + (end - start) / 2);
       if(target < arr[mid]){
        end = mid - 1;
       }else if(target > arr[mid]){
        start = mid + 1;
       }else{
           return mid
       }
    }   
    return -1

}

const arr = [3, 5, 7, 9, 10, 90, 100, 130,
    140, 160, 170],  target = 3;

    console.log(infiniteArraysSearch(arr, target));