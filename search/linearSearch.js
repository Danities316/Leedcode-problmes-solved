// Remember Linear search have to be sorted before searching
const doLinearSearch = (arr, targetValue) =>{
    // console.log(arr)
    arr.sort((a,b) => a-b);
    // console.log(arr)
    for (var guess =0; guess < arr.length; guess++){
        if(guess === targetValue){
            return console.log('The guess number is ', guess); //found it
        }
    }
    return console.log('not found!'); // didnt find it
}
var isNumbers = [1,2,7,8,9,0,3,4,5,6]

// doLinearSearch(isNumbers, 11);


function isFund(arr, target){
    // console.log(arr);
    if(arr.length == 0){
        return console.log('NOT FOUND!');
    }
    for (let index = 0; index < arr.length; index++) {
        var element = arr[index];
        if(element == target){
            return console.log(index);
        }       
    }
    return console.log('NOT FOUND!')
}
var mumbers = "danities"
// isFund(mumbers, 's');

//***************************LEANING DSA FROM KUNAL kushwaha**************************** */ 
// https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/06-searching.md




function searchRange(arr, target, start, end){
    // console.log(arr);
    if(arr.length == 0){
        return console.log('NOT FOUND!');
    }
    for (let index = start; index <= end; index++) {
        var element = arr[index];
        if(element == target){
            return console.log('The index is ', index);
        }       
    }
    return console.log('NOT FOUND!')
}
var myNumbers = [1,2,7,8,9,0,3,4,5,6]
// searchRange(myNumbers, 1, 1, 4);

function searchMinimumValue(arr){
    var target = arr[0];
    if(arr.length == 0){
        return console.log('NOT FOUND!');
    }
    for (let index = 0; index <= arr.length; index++) {
        var element = arr[index];
        if(element < target){
            target = element
            return console.log('The index is ', target);
        }       
    }
    return console.log(target)
}
var myNumbers = [11,22,14,-7,41,16]
// searchMinimumValue(myNumbers);


//Searching in a 2D array
function searchIn2DArray(arr, target){
for (let index = 0; index < arr.length; index++) {
    for (let col = 0; col < arr[index].length; col++) {
        if(arr[index][col] == target){
            const ans = new Array(index, col)
            return console.log(ans)
        }       
    }
    
}
return [-1, -1];

}
var target = 0;

const arr = [[1,2,38], [55,77,10,3], [30,10,17,2]]

// searchIn2DArray(arr, target);

// Search the maximum number in a 2D array
function searchInMax2DArray(arr){
    let max = 0;
    for (let index = 0; index < arr.length; index++) {
        // console.table(arr[index])
        for (let col = 0; col < arr[index].length; col++) {
            if(arr[index][col] > max){
                max = arr[index][col];
                // return console.log(max)
            // console.table(arr[col])
            }       
        }
        
    }
    return max;
}
    
    
    
    const arr2D = [
        [1,2,38], 
        [55,11,10], 
        [30,10,17]
    ]
    
    // console.log(searchInMax2DArray(arr2D));


    // Search the manimum number in a 2D array
function searchInMax2DArray(arr){
    let max = 0;
    for (let index = 0; index < arr.length; index++) {
        // console.table(arr[index])
        for (let col = 0; col < arr[index].length; col++) {
            if(arr[index][col] < max){
                max = arr[index][col];
                // return console.log(max)
            // console.table(arr[col])
            }       
        }
        
    }
    return max;
}
    
    
    
    const arr2D2 = [
        [1,2,38], 
        [55,11,10], 
        [30,10,17]
    ]
    
    // console.log(searchInMax2DArray(arr2D2));


    //***************************Leedcode questions**************************** */ 
    // https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

    //1. Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.

 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

function evenDigitsCount(nums) {
    let count = 0;
for (let index = 0; index < nums.length; index++) {
    if(even(nums[index])){
        count++;
    }
}

    return count;
}
//chcking if the digit is even
var even = function(digit){
    let numberOfDigits = digits(digit);
    if(numberOfDigits % 2 == 0){
        return true;
    }
    return false;
}

// var evenNums = function(digit){
//     var digit = digit.toString()
//     if(digit.length % 2 === 0){
//       return true
//     }
//     return false
//   };

//count number of digits
var digits = function(num){
    let count = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
    while(num > 0){
        // console.log(num)
        count++;
        num = num / 10;   
    }
    return count;
}
// const numOf = [12,345,2,6,7896];
// console.log(evenDigitsCount(numOf))

function sqr(x){
    if(x == 0 || x == 1 ){
        return x;
    }

    let count, i = 1;
    
    while (count <= x){
        i++;
        count = i * i ;
    }
    return i - i;
}

console.log(sqr(11));
