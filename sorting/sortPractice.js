// https://leetcode.com/problems/maximum-product-of-three-numbers/

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

function maxmumProduct(nums){
    let product = 1;
   for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(nums[i] < 0){
        product
    }
    product = product * element
   }
   return product

}
let nums = [-100,-98,-1,2,3,4]
console.log(maxmumProduct(nums))

