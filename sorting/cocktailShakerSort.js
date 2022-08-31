// >>>>Cocktail-Shaker Sort: A type of bubble sort which travcerse a list of elements both forward and backwords as opposed to just forward and swaps
//                                              values if needed.
// STEPS IN BUBBLE ALGO:
// 1. Required 2 variables: swappedValues(boolean) and traversingIndex(integer)
// 2. While swappedValues is equal to true:
// 	a. Set swappedValues equal to false.
// 	b. Traverse from yhr 0th index to the last index in the data-set:
// 		i. if the value of the integer stored at the traversingIndex  is greater than the element at the traversingIndex +1,
// 		  swap them and set the swappedValue equal to true
// 		ii. Increase traversingIndex by 1
// 	c. Exit the loop if swappedValues is equal to false.
// 	d. Traverse from the traverseIndex to the 0th index in the data-set:
// 		i. if the value of the integer stored at the traversingIndex is less than
// 		  the value t the traversingIndex-1, swap the two values and set swappedValues equal
// 		   to true.
// 		ii. Decrease the traversingIndex
// 4. Repeat step 3 until swappedValues evaluates to false
let testInput = [5,1,4,2,8,0,2];
let testString = ['mango','orange','pine','apple', 'banana']



function cocktailShakerSort(input){
    //Start and end is used to keep track of where the beginning and the end ot the array is at
    //to determine where needs to be checked for sorting
    //SwappedValue is our conditional or boolean to check if everything is sorted
    let start = 0, end = input.length, swappedValue = true;

    while(swappedValue){
          //setting the flag, in case it is true from the previous iteration
          swappedValue = false;       

        //Bubble sort from the left side of the array to the right
        //moving the largest to the right.
        for(let i = start; i < end -1; i++){
            if(input[i] > input[i + 1]){
                let temp = input[i];
                input[i] = input[i+1];
                input[i +1] = temp;
                swappedValue = true;
            }
        }
        //This is th update the end, so that next iteration, we dont have to check this index
        end--;

             //if everything is already sorted, we can break out of the loop early
             if(!swappedValue)
                break;
            
            swappedValue = false;
            //Reversing bubble sort, moving the smallest to the front
            for(let i = end - 1; i > start; i--){
                if(input[i - 1] > input[i]){
                    let temp = input[i];
                    input[i] = input[i-1];
                    input[i - 1] = temp;
                    swappedValue = true;
                }
            }
            //This is to update the beginning, so that next iteration, we dont have to check
            start++
    }
    return console.log(input)
}

cocktailShakerSort(testString)