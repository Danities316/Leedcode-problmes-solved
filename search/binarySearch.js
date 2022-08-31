// Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input
// value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4


//NOTE
// Any question/problem given that is already sorted before asking you to find solution to it use binary search
// A binary search Algo is an interval search algo widely used
// in a sorted array to determine the POSITIOn of a particular value 
// or element. A sorted array is a dataset in which the elements are arranged
// in a specific particular periodic, alphabetic or numeric order.
// it is a divide and conquer, reducing the search area by half each time, trying to find
// a target number/alhpabet as the case may be

//Things require in any algorithms
// 1. input 2. output 3. variables should be created, and what initial value should they have
// 4. What steps should be taken to compute other values and to ultimately compute the output
//5. Do these steps repeat instructions that can be written in simplified form using a loop

//Psuedocode for binary search
// variables : target(what we are searching for) start(first index of the sorted arrary), end(last index) and mid(middle index)
// 1. Let start = 0 and end = lastElements-1.
// 2. If end < start, then stop: target is not present in array. Return -1.
// 3. calculate middle(mid) as the average of end and start, rounded down (so that it is an integer) - (start + end)/2.
// 4. If array[mid](the index of the middle) equals target, then stop. You found it! Return mid.
// 5. If the mid was too low, that is, array[mid] < target, then set end = mid - 1.
// 6. Otherwise, the target was too high. Set start = mid + 1.
// 7. Go back to step 2.
// 8. Repeat until found or return not found
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// console.log(primes.length)

const binarySearch = (arr, target) =>{
    let start = 0;
    let end = arr.length - 1;

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
    return -1

}

console.log(binarySearch(primes, 40));
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
// https://stackoverflow.com/questions/30567593/khan-academy-algorithm-binary-search-solution
//17:51