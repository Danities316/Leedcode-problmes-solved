// <!-- https://leetcode.com/problems/split-array-largest-sum/ -->

function splitArray(nums, m){
    let min = 0;
    let max = 0;

    for(const num of nums){
        min = Math.max(min, num);// minimum value in the array is the largest number in the array
        max += num; // Maximum number of the array is the sum of all the elements in the array 
    }
    if(m === 1){
        return max;
    }
    //apply binary seach to the array
    let start = min;
    let end = max
    while(start < end){
        let mid = Math.floor((start + end) / 2);
        
        // Calculate how many pieces(m) can the array be divided into
        let sum = 0; // Using this for adding elements
        pieces = 1; // number of possible pieces i can get
        for(const num of nums){
            if(num + sum > mid){
                //if an element + sum is greater than the mid then dont add it, make a new subaray
                //if you add the new element into a new subaray then sum = num
                sum = num //
                pieces++ //increament the number of m so that we can compare
            }else{
                sum += num
            }
        }
        if(pieces > m){
            start = mid + 1
        }else{
            end = mid
        }
    }
    return start;
}

const arr = [7,2,5,10,8];

console.log(splitArray(arr, 2));
// 3:39