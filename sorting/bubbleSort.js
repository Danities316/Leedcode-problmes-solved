// STEPS IN BUBBLE ALGO:
// 1. Required 2 variables: swappedValues(boolean) and traversingIndex(integer)
// 2. Set swappedValue equals to true;
// 3. While swappedValues is equal to true:
// 	a. Set swappedValues equal to false and traversingIndex to 0. Start at the traversingIndex
//                       and go to the second to last elements of the list
// 		i. if element at the traversingIndex  is greater than the element at the traversingIndex +1,
// 		  swap them and set the swappedValue equal to true
// 		ii. Increase traversingIndex by 1
// 4. Repeat step 3 until swappedValues evaluates to false



//Algorithm for bubble sort
// BubbleSort(array){
//     for i -> 0 to arrayLength 
//        for j -> 0 to (arrayLength - i - 1)
//         if arr[j] > arr[j + 1]
//           swap(arr[j], arr[j + 1])
//   }

const BubbleSort = (input) =>{
    for (var i =0; i < input.length; i++){
          //Last i element are already in place
        for(var j = 0; j < (input.length - i -1); j++ ){
            //checking if the element at present location is 
            // greater than the next element
            if(input[j] > input[j + 1]){
                //if the condition is true then swap the elementd
                var temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp

            }
        }
    }
    console.log('compare contigius element and sort', input)
}

BubbleSort([234, 43, 55, 63,  5, 6, 235, 547]);