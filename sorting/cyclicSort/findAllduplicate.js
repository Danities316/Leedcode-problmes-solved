// https://leetcode.com/problems/find-all-duplicates-in-an-array/submissions/

 function findAllDuplicates (nums) {
    let i = 0;
    while(i < nums.length){
    let correctIndex = nums[i] - 1;
        if(nums[i] != nums[correctIndex]){
            swapped(nums, i, correctIndex)
        }else{
            i++
        }
    }
    //Find the incorrect index, that are your ans
    let ans = []
    for(let j = 0; j < nums.length; j++){
        if(nums[j] != j + 1){
            ans.push(nums[j])
        }
    }
    return ans
};

function swapped (nums, first, second){
    let temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp
    
    return nums
}

let nums = [4,3,2,7,8,2,3,1]
console.log(findAllDuplicates(nums))