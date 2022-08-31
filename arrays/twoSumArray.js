https://leetcode.com/problems/two-sum/

function twoSum (nums, target) {
    let result = [];
   for (let index = 0; index < nums.length; index++) {
    for (let j = index + 1; j < nums.length; j++) {
        const element = nums[j];
        if(nums[index] + nums[j] == target){
            result.push(index, j)
        }
    }
    
   }
    return result
    
};

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums, target))