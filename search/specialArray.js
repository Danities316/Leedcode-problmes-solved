
function specialArray(nums){
    let counter = 0;
    let start = 0;
    let end = nums.length;

    while(start <= end){
        let mid = Math.floor((start + end ) / 2);

       for (let i = 0; i < nums.length; i++) {
             if(mid <= nums[i]) {counter += 1;}
       }
       if(counter === mid){
        return mid
       }else if(counter < mid){
        end = mid - 1
       }else{
        start = mid +1
       }
    }
    return -1
}

const nums = [0,4,3,0,4];
console.log(specialArray(nums))