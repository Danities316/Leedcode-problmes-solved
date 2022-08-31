// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums.

function findAllmissinNum(nums){
    let i = 0;

    while(i < nums.length){
        correctIndex = nums[i] - 1;
        if(nums[i] != nums[correctIndex]){
            swapped(nums, i, correctIndex)
        }else{
            i++
        }
    }
//just find the missing number
let ans = [];
for (let index = 0; index < nums.length; index++) {
  if(nums[index] != index + 1){
    ans.push(index + 1)
  }
    }
    return ans
}

function swapped(arr, first, second){
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}

const arr = [4,3,2,7,8,2,3,1]
console.log(findAllmissinNum(arr))