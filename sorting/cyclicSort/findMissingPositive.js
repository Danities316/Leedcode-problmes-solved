// https://leetcode.com/problems/first-missing-positive/

function firstMissingPositive (nums) {
    let i = 0;
    while(i < nums.length){
        correctIndex = nums[i] - 1
        if(nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[correctIndex]){
            swapped(nums, i, correctIndex)
        }else{
            i++
        }
    }
    //find the smallest postive number
    for(let j = 0; j < nums.length; j++){
        if(nums[j] != j + 1){
            return j + 1
        }
        
    }
    return nums.length + 1
    
};

function swapped (nums, first, second){
    let temp = nums[first]
    nums[first] = nums[second]
    nums[second] = temp
    return nums
}
let nums = [3,4,-1,1]
console.log(firstMissingPositive(nums))