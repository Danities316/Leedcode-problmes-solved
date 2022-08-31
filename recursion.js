// recursion: it is an algorithm to solve a problem by solving a smaller instance of the same problem, 
// unless the problem is so small that we can just solve it directly. We call this technique 

//Factorial functions
// We indicate the factorial of n by n!. It's just the product of the integers 1 through n. For example, 5! 
// equals 1 * 2 * 3 * 4 * 5, or 120.
//Uses of Factorial. 1. Used to order(arrange) things.2. count how many ways you can choose things from a collection of things

// var factorial = function(n) {
//     var result = 1;
// for(var i = result; i <= n; i++){
//     result *= i;
// }

//     return result;
// };

// console.log("The value of 5! should be " + 5*4*3*2*1);
// console.log("The value of 5! is " + factorial(4));
// console.log(5 * 24);



var factorial = function(n) {
	// base case: 
	if(n ===0){
	    return 1;
	}
	// recursive case:
	return n * factorial(n-1);
}; 

console.log("The value of 0! is " + factorial(0) + ".");
console.log("The value of 5! is " + factorial(5) + ".");