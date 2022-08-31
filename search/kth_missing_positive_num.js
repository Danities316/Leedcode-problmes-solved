var findKthPositive = function(arr, k) {
let start = 0;
let len = arr.length-1;
let end = arr[end]
let newArr = [...Array(end + 1).keys()].slice(1);   
}

function notFound(arr) {
    let start = 0;
let len = arr.length-1;
let end = arr[len]
    let arrNotInArr = []
    let newArr = [...Array(end + 1).keys()].slice(1);
    for (let index = 0; index < newArr.length; index++) {
        if(arr[index] != newArr[index]){
            let result = arrNotInArr.push(newArr[index]);
            console.log(result)
        }else{
            return arr[index];
        }
}
return arrNotInArr;
}

// findKthPositive()
let arr = [2,3,4,7,11];
console.log(notFound(arr));