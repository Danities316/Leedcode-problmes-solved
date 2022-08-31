function RBS(nums, target) {
  let pivot = findPivot(nums);

  //If pivot is not found it means the array is not a rotated array
  if (pivot === -1) {
    return binarySearch(nums, target, 0, nums.length - 1);
  }
  // if pivot is found that means you've found 2 sorted rotated arrays
  if (nums[pivot] === target) {
    return pivot;
  }
  if(target >= nums[0]){
    return binarySearch(nums, target, 0, pivot.length -1);
  }
  return binarySearch(nums, target, pivot + 1, nums.length -1);
}
function findPivot(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.trunc((start + end) / 2);
    // 4 cases here
    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (mid < start && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }
    if (arr[mid] <= arr[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.trunc((start + end) / 2);
    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
let nums = [3,5,1], target = 3
console.log(RBS(nums, target));