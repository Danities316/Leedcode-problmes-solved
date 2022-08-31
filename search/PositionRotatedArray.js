function countRotations(arr){
let pivot = findPivot(arr)
return pivot + 1;


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

}

let arr = [7, 15, 1, 2, 3];;
console.log(countRotations(arr))
