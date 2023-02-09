// LeedCode Question: 88. Merge Sorted Array
// question link: https://tinyurl.com/yawa9su6
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    nums1.push(...nums2);
    nums1.sort((a,b) => a-b)
    return nums1
};
var nums1 = [1,2,3,0,0,0]
var m = 3
var nums2 = [2,5,6]
var n = 3
console.log(merge(nums1, m, nums2, n))