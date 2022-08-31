// https://leetcode.com/problems/find-in-mountain-array/

// (This problem is an interactive problem.)

// You may recall that an array arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.

// You cannot access the mountain array directly. You may only access the array using a MountainArray interface:

// MountainArray.get(k) returns the element of the array at index k (0-indexed).
// MountainArray.length() returns the length of the array.
// Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

function searchInMountainArray(arr, target){
    let peak = mountainArray(arr);
    let firstTry = orderAgnosticSearch(arr, target, 0, peak);
    if(firstTry != -1){
        return firstTry;
    }
    //try seaching the ascending order
    orderAgnosticSearch(arr, target, peak + 1, peak.length -1);

}

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

function orderAgnosticSearch(arr, target, start, end){

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
