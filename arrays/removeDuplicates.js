// https://leetcode.com/problems/remove-duplicates-from-sorted-array/


function removeDuplicates(nums) {
    let result = [];
   for (let index = 0; index < nums.length; index++) {
        for (let j = index + 1; j < nums.length; j++) {
            if(nums[index] == nums[j]){
                result.push(nums[index]);
            }
                
        }
   }
//    result = nums;
   return result
};
const  nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums))