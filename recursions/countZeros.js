var countZeros = function (nums) {
return helper(nums, count = 0)
}

var helper = function name(nums, count = 0) {
    if(nums == 0){
        return count
    }

    let reminder =nums % 10
    
    if(reminder == 0){
        return helper(nums / 10, count + 1)
    }
    return helper(nums / 10, count)
}
console.log(countZeros(30204, 0))
// https://stackoverflow.com/questions/13282913/writing-a-recursive-function-that-counts-zeros