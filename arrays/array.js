// 1. Write a JavaScript function to check whether an `input` is an array or not

function checkArray(input){
    return Array.isArray(input)
    // console.log(input);
}

console.log(checkArray("jkhhhhvhjhvg")); // returnns false

// 2. Write a JavaScript function to clone an array
const cloneArray = (input) =>{

    // old ways
    console.log(input.slice())

    // Es6 ways
    return ([...input])
}

// console.log(cloneArray([1, 2, [4, 0]]));


// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
const getFirstElemets = (n)=>{
    // n = [];
    return n[0]
}

// console.log(getFirstElemets([[1,7,5,6],4]));


//4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

const getLastElements = (array) =>{
    return array[array.length-1];
}

// console.log(getLastElements([[1,7,5,6],[4,5,6,8]]));

//5. Write a simple JavaScript program to join all elements of the following array into a string
// Sample array : myColor = ["Red", "Green", "White", "Black"];

const joinElements = (input) =>{
    // return input.join()
    return input.toString()
}

// console.log(joinElements(["Red", "Green", "White", "Black"]));

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
// For example if you accept 025468 the output should be 0-254-6-8
// Convert number to String
// keep first element of array into separate array i.e. newArray
// Run the loop on string length
// Check current and the next element is divisible by 2 or not. If yes, push '-' else push the next item.
// Finally join the array elements of newArray with ''.

const nInput = (input) =>{
    input = input.toString()
    let newInput = [input[0]];

    for(let i = 1; i < input.length; i++){
        if(input[i-1]%2 === 0 && input[i]%2 === 0){
            newInput.push('-', input[i])
        }
        else{
            newInput.push(input[i])
        }
        
    }
    console.log(newInput.join(''))

}
// console.log(nInput(02546835448866));
// console.log(nInput('kjhckhcchg'));


// 7. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

function sortedArray (input) {
    for(var i = 0; i < input.length; i++){
       let minIndex = input[i];
        for(var j = i+1; j < input.length; j++){
            if(input[j] < input[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
       [input[i], input[minIndex]] = [input[minIndex], input[i]]
        }
    }
    return input
}
// console.log(sortedArray([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ])); //-4, 1, 2, 3, 3,5, 6, 7, 8


// 8. Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const mostFrequent = (input) =>{
let newInput;
let counter = 0;
let nIndex = 1
for(let i = 0; i < input.length; i++){
    for(let j = i; j < input.length; j++){
    
        if(input[i] == input[j]){
            counter++
        }
        if(nIndex < counter){
            nIndex = counter;
            newInput = input[i]
        }
    }
    counter = 0;
}
console.log(`'${newInput}' appears ${nIndex} times`)
}
console.log(mostFrequent([ 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3 ])); //'a' appears 5 times


// 9. Write a JavaScript program which accept a string as input and swap the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const swapCase = (input) =>{
    let results = ''
    for(let i =0; i < input.length; i++){
        if(input[i] == input[i].toUpperCase()){
            results += input[i].toLowerCase()
        }else{
            results += input[i].toUpperCase()
        }
    }
    // console.log(results)
    return results
}
console.log(swapCase('The Quick Brown Fox')); //tHE qUICK bROWN fOX



//10. Write a JavaScript program to find the sum of squares of a numeric vector

const sumSqr = (input) =>{
    var sum = 0;
    var i = input.length;
    while(i--){
        sum += Math.pow(input[i], 2);
        return sum
    }
}
console.log(sumSqr([0,1,2,3,4]));// 16


// 11. Write a JavaScript program to compute the sum and product of an array of integers

const sumProduct = (input) =>{
    let sum =0, 
    //using 1 to start the multiplication to avoid returning 0
    pro =1;
        for (var i = 0; i < input.length; i++){
            sum += input[i];
            pro *= input[i];
    }
    return console.log("The sum is:", sum + " The product is:", pro)
}

console.log(sumProduct([1, 2, 3, 4, 5, 6]));// sum 21 product 720


// 12. Write a JavaScript program to add items in an blank array and display the items.
const addItems = (input) =>{
    let results = []
    let addItems = results.push(input);
    // console.log(addItems);
    return results
}
console.log(addItems('hello'));//hello



// 13. Write a JavaScript program to remove duplicate items from an array 

var duplicateArray = (input) =>{
    input = new Set(input)
 
    return [...input]
}
console.log(duplicateArray([1,5,6,0,2,3,5,3,6,0,8]));

// 14. We have the following arrays:
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// ordinal = ["th","st","nd","rd"];
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."
const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const ColorOdinal = (input) =>{
    const ordinal = ["th","st","nd","rd"];
    var isModuleOfInput = input%100;
    // using bolean operator ||, and using the index of the array Ordinal, finaly we use modulo to return a reminder, if the reminder is negative it returns 0
    //inspirations: https://leancrew.com/all-this/2020/06/ordinal-numerals-and-javascript/ 
    return isModuleOfInput + (ordinal[(isModuleOfInput - 20) % 10] || ordinal[isModuleOfInput] || ordinal[0]);
}
color.forEach((item, index) =>{
    let ordinal = index + 1;
    let output = (ColorOdinal(ordinal) + " Choice Is " + color[index] + ".")
    console.log(output)
});
// Returns
// 1st Choice Is Blue .
// 2nd Choice Is Green.
// 3rd Choice Is Red.
// 4th Choice Is Orange.
// 5th Choice Is Violet.
// 6th Choice Is Indigo.
// 7th Choice Is Yellow .



// 15. Write a JavaScript program to find the leap years in a given range of years
//Things to note about leap year:
//1. it is every 4 years to the calendar year.
//2. Years that are divisible by 100 (century years such as 1900 or 2000) cannot be leap years
//unless they are also divisible by 400 (For this reason, the years 1700, 1800, and 1900 were not leap years, but the years 1600 and 2000 were.)
//If a year satisfies both the rules above, then it is a leap year. 
//Therefore: is year divisible by 4 if yes is a leap year, is it divisible by 100? if no it is a leap year
// is it divisible by 400 if yes it is a leap year
const isLeapYear = (start, end) => {
    var yearRange = [];
    for(var i = start; i <= end; i++){
        yearRange.push(i);
    }
    var results = [];
   const checkLeapYear =(year) =>{
       //if year is divisble by 4 and not divisible by 100 OR it is divisble by 100 and divisible by 400
       if ((year % 4 === 0 && year % 100 !==0)  || (year % 100 === 0 && year % 400 === 0)){
        return year
       }else{
           return false;
       }
   }

  yearRange.forEach((year) =>{
      if(checkLeapYear(year)){
          results.push(year);
      }
  });
  return console.log(`Leap year within ${start} to ${end} are:  ${results}`)
}

isLeapYear(2000, 2012)


// 16. Write a JavaScript program to shuffle an array
//using fisher-yates-shuffle algorithm
let arr = [1,2,3,4,5,6,7,8,9,0]
const shuffleArray = (input) =>{
    
    
    var range = input.length
    var index, roll;
//while there are elements in the array
    while(range > 0){
        //pick a random index
        index = Math.floor(Math.random() * range);
        // decrease range by 1
        range--;
        //And swap the last element with it
        roll = input[range];
        input[range] = input[index];
        input[index] = roll;       
    }
    return console.log(input);
}
//inspirations
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
shuffleArray(arr);




// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php