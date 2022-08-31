function salectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        const lastIndex = arr.legnth - i - 1
        let getMax= getMaxIndex(arr, 0, lastIndex);
        swapped(arr, getMax, lastIndex);
    }
return arr;
}


function getMaxIndex(arr, start, end){
    let max = start;
    for (let i = start; i <= end; i++) {
        if(arr[max] < arr[i]){
            max = i
        }
    }
return max
}


function swapped(arr, first, second){
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}




const arr = [5,3,4,2,1]
console.log(salectionSort(arr))
// console.log(swapped(arr, 0, 4));