// Find the smallest number. Swap it with the first number.
// Find the second-smallest number. Swap it with the second number.
// Find the third-smallest number. Swap it with the third number.
// Repeat finding the next-smallest number, and swapping it into the correct position until the array is sorted.


// function SelectionSort (input) {

//     var counter = 0;
//     var traverseIndex = counter + 1;
//     var miniIndex = 0;


//     for(var i = 0; i < input.length; i++){
//         miniIndex = input[i];
//         for(var j = i+1; j < input.length; j++){
//             if(input[j] < input[miniIndex]){
//                 //change the current minimum index if a smaller number is found
//                 miniIndex = j;
//             }
//         }
//         if(miniIndex !== i){
//        [input[i], input[miniIndex]] = [input[miniIndex], input[i]]
//         }
//     }
//     return input
// }


// console.log(SelectionSort([22,33, 4, 3, 8, 7, 2, 1, 9, 5, 6, 01, 02, 0])); //0, 1, 2, 3, 4, 5, 6, 7, 8, 9


//Khan academy solutions


//Swapping smallest elements to the left
var swap = (arr, firstIndex, secondIndex) =>{
    var temp = arr[firstIndex];
    //swaping first index with second index
    arr[firstIndex] = arr[secondIndex];
    //swapping second index with first index
    arr[secondIndex] = temp
};


//finding the index of a minimum value in array eg [1,3,2,4,5,6,0] return 6
var indexOfMinimumValue = (arr, startIndex) =>{
    var minValue = arr[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < arr.length; i++){
        if(arr[i] < minValue){
            minIndex = i;
            minValue = arr[i];
        }
    }
    return minIndex;
}

//Iterating through the array and swapping smallest to left
const selectionSort = (arr) =>{
    minIndex = 0;
    minValue = arr[minIndex];
    for(var i =0; i < arr.length; i++){
        swap(arr, i, indexOfMinimumValue(arr, i));
    }
}

var array = [22, 11, 99, 88, 9, 7, 42, -2];
selectionSort(array);

console.log("Array after sorting:  " + array);

