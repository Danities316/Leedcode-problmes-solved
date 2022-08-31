function insertionSort(arr){

    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j > 0; j--) {
            if(arr[j] < arr[j - 1]){
                swapped(arr, j, j - 1);
            }else{
                break;
            }
            
        }
        
    }
    return arr;
}

function swapped(arr, first, second){
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}

const arr = []
console.log(insertionSort(arr))