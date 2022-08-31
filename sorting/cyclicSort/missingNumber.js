// https://leetcode.com/problems/missing-number/
// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.
//
function missinNumber(nums){
    let i = 0;
    while(i < nums.length){
        let correctIndex = arr[i];
        if(nums[i] < nums.length && nums[i] != nums[correctIndex]){
            swapped(nums, i, correctIndex)
        }else{
            i++
        }
    }
    // search for 1st missing number
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] != index){
            return index
        }
    }
    return nums.length
}
function swapped(arr, first, second){
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}
