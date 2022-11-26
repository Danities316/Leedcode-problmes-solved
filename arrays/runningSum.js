// https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1

var runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++) {
      nums[i] += nums[i - 1] 
  }  
return nums
};
console.log(runningSum([1,2,3,4]))