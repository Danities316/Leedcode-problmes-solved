function selectionSor(arr){
    for (let i = 0; i < arr.length; i++) {
        const lastIndex = arr.length - i - 1;
        let maxIndex = getMaxIndex(arr, 0, lastIndex);
        swapped(arr, maxIndex, lastIndex);
        
    }
    return arr;
}

function swapped(arr, first, second){
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}


function getMaxIndex(arr, start, end){
    let max = start;
    for (let i = start; i <= end; i++) {
        if(arr[max] < arr[i]){
            max = i
        }
    }
    return max;
}



const arr = [5,3,4,2,1]
console.log(selectionSor(arr))