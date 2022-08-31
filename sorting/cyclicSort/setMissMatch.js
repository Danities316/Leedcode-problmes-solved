// https://leetcode.com/problems/set-mismatch/

const setMissMatch = function(nums){
    let i = 0;
    while(i < nums.length){
        let correctIndex = nums[i] - 1;
        if(nums[i] != nums[correctIndex]){
            swapped(nums, i, correctIndex)
        }else{
            i++
        }
    }
    //find duplicat and missing number
    let ans = []
    for(let j = 0; j < nums.length; j++){
        if(nums[j] != j + 1){
            ans.push(nums[j], j + 1)
        }
    }
    return ans
    
};

var swapped = function(nums, first, second){
    let temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp
    return nums
}

let nums = [1,2,2,4]
console.log(setMissMatch(nums))
