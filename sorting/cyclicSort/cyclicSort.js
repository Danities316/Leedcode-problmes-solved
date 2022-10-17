//Any sorting/search that is in the correct index(that is to lie 1-10 or 0 to N - where n is the highest number) use cyclic sort
// becuase cyclic sort is O(n)


// Always use cyclic sort when sorting 0 to N(where n is the length) problems
//check correct index - swap  -  move to the next index
function cyclicSort(arr){
    let i = 0;

    while(i < arr.length){
        //check the correct index
        let correctIndex = arr[i] - 1
        //if it is not correct index swapped
        if(arr[i] != arr[correctIndex]){
            swapped(arr, i, correctIndex);
        }else{
            i++;
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

const arr = [5,4,3,2,1]
console.log(cyclicSort(arr))