/*Algorithm for solving Binary search
Mote: Arrays must be sorted first
1. Find the middle element called mid
2. Check if target element(what you are searching) is greater than the mid, then search in the right
  else search in the left.
3. if mid is equal to target, then youve founf your answer
*/


function binarySearch(arr, target) {
 let start = 0;
 let end = arr.length - 1;
 if( target == start){
    return arr[0]
 }
 while (start <= end){
    let mid = Math.trunc((start + end) / 2);
    if(target > arr[mid]){
        start = mid + 1
    }else if(target < arr[mid]){
        end = mid - 1;
    }else{
        return mid
    }
 }   
 return -1;
}
const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(arr, 10));


//Searching for order Agnostic Array - Array that are either ascending or descending

function orderAgnosticSearch(arr, target){
    let start = 0;
 let end = arr.length - 1;
 let isAsc = arr[start] < arr[end] ? true : false;

 while (start < end){
    let mid = Math.trunc((start + end) / 2);
if(arr[mid] === target){
    return mid;
}

if(isAsc){
    if(target < arr[mid]){
        end = mid - 1;
    }else {
        start = mid + 1;
    }
}else{
    if(target > arr[mid]){
        end = mid - 1;
    }else {
        start = mid + 1;
    }
}

 }   
 return -1;

}
const arr2 = [1,2,3,4,5,6,7,8,9,10];
// arr2.reverse();
// console.log(arr2);
// console.log(orderAgnosticSearch(arr2, 2));
//50:54
/******************************* leedcode questions*************************************************************/
// 1. 374. Guess Number Higher or Lower
/* We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

 

Example 1:

Input: n = 10, pick = 6
Output: 6

Example 2:

Input: n = 1, pick = 1
Output: 1*/
function guessNumber(n){
    let pick = 0;
    let 
}


