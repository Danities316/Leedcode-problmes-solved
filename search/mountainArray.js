// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// An array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
// Simply put, mountain array means array that rise(ascending order) and fall(descending order) just like a mountain eg [1,2,3,4,5,3,2,1]
// You must solve it in O(log(arr.length)) time complexity.

function mountainArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] > arr[mid + 1]){
            //iam in the decreasing part of the array
            // this may be the answer
            //This is why end != mid - 1
            end =  mid;
        }else {
            start = mid + 1 // becuase we know mid + 1 element  > mid element
        }
    }
    //in the end start == end and pointing to the largest number(which is what we are looking for)
    return start // or you can return end as both are equal;
}

arr = [0,1,0]
console.log(mountainArray(arr));