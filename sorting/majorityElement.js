var majorityElement = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        let result = 0;
        for (let j = 0; j < nums.length; j++) {
            if(nums[i] == nums[j]){
                result++
            }
            let n = Math.floor(nums.length / 2);
            if(result > n){
                return nums[i]
            }
            
        }
        
    }
};
var nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))