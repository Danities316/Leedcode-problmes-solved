// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps = function (nums) {
    return helper(nums, 0)
}

var helper = function (nums, steps) {
    if(nums == 0){
        return steps
    }
    if(nums % 2 == 0){
        return helper(nums / 2, steps + 1)
    }
    return helper(nums - 1, steps + 1)
    
}