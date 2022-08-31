function searchRange(nums, target) {
    let result = [-1, -1];
    
    // Checking first occurance of the target
    let start = check(nums, target, true);
    let end = check(nums, target, false);
    
    result[0] = start;
    result[1] = end;
    
    return result
 
};
// checking the 
function check(nums, target, check){
    let result = -1; 
    let start = 0;
    let end = nums.length-1;
 
    
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        
        if(target < nums[mid]){
            end = mid - 1;
        }else if(target > nums[mid]){
           start = mid + 1;
       }else{
           // potential answer
           result = mid;
           if(check == true){
               end = mid - 1;
           }else{
               start = mid + 1;
           }
       }
    }
    
    return result;
}
const nums = [5,7,7,8,8,10], target = 8
console.log(searchRange(nums, target));

// 1:07