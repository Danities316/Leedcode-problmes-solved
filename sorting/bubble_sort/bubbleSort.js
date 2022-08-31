
function bubbleSort(arr){
    //run the steps n-1 times
    let swapped = Boolean;

    for (let i = 0; i < arr.length; i++) {
        swapped = false;
        //for each step, max item will come at the last respective index
        for (let j = 1; j < arr.length - i; j++) {
            //swap if the item smaller than the previous items
            if(arr[j] < arr[j-1]){
                //swap if the item is smaller than the previous item
               let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                swapped = true;
            }
            
        }
        if(!swapped) break;
    }
    return arr
}
const arr = [5,3,4,2,1]
console.log(bubbleSort(arr))