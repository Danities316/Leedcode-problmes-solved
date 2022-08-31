
//***************************Leedcode questions**************************** */ 
//1.    
function getConcatenation (nums) {
        var ans = nums.concat(nums)
        console.log(ans)
    }
    // getConcatenation([1,2,5,3])


    
// 2.
    function runningSum (nums) {
//  let sum;
 for (let index = 1; index < nums.length; index++) {
    //nums[index] = index location at a particular iteration of the array(nums)
    // starting from 1 num[index] = 2 + 1 because nums[1] + nums[2 -1] 
    nums[index] = nums[index] + nums[index - 1];
 }
 return nums;

}
    // console.log(runningSum ([1,2,3,4]))

// 3.
// You are given an m x n integer grid accounts where accounts[i][j] is
//  the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer 
// is the customer that has the maximum wealth.

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6


function maximumWealth (accounts){
    let wealth = 0;
    for (let customer = 0; customer < accounts.length; customer++) {
        const element = accounts[customer];
        let sum = 0;
        for (let bank = 0; bank < element.length; bank++) {
             sum += accounts[customer][bank];
        }
        if(sum > wealth){
            wealth = sum
        }

    }
    return console.log("wealth is", wealth);
}

let a = [[1,2,3],[3,2,1]];

// maximumWealth(a);

// 4. Array the shuffle
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

/**SOLUTION
 * Create a new array called it ans
 * create a for loop that the length is n
 * push the ith item into the ans
 * push n + ith into ans
 * return ans outside the loop
 */

function shuffle(nums, n){
    const ans = [];
for (let index = 0; index < n; index++) {
    ans.push(nums[index]);
    ans.push(nums[n + index]);
       
}
return ans;
}

num = [2,5,1,3,4,7], ni = 3
// console.log(shuffle(num, ni));



// 5. Kids With the Greatest Number of Candies
/*There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

*Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.


*Note that multiple kids can have the greatest number of candies.
Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

*/

function kidsWithCandies(candies, extraCandies){
    //greatest candies
    let max = Math.max(...candies);
    // output the boolean of result
    const result = []

    for (let index = 0; index < candies.length; index++) {
        //adding each candies with extraCandies
        const ans = candies[index] + extraCandies;
        if(ans < max){
            result[index] = false
        }else{
           result[index] = true
        }
    }
    return result;
}
const candies = [2,3,5,1,3], extraCandies = 3
// console.log(kidsWithCandies(candies, extraCandies));
// .6
// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// HANDSHAKES IN GATHERING
// Imagine this problem like, There is a gathering organized by some guy, the guest list is [1,2,3,1,1,3].
// The problem with the guest is they only handshake with like minded people. (Like minded here is basically the digit should be same , for example, 1 will handshake with 1 only, 2 will handshake with 2 only and so on)

// So, finally we just need to count number of handshakes in the gathering. 💯 💯

// (To distinguish , multiple 1's and 3's , a,b,c,d... letters are used)

// 🔥 the day of arrival 🔥

// one by one guests are arriving at the gathering

// ✅ first guest: 1

// ✅ second guest: 2
// (at this moment, in gathering hall we have 1 (2 is about to enter) , since they are not like minded they wont shake hands)

// ✅ third guest:3
// (at this moment, in gathering hall we have 1 ,2 (3 is about to enter), since they are not like minded they wont shake hands)

// ✅ fourth guest : 1
// (at this moment, fourth guest will see in gathering hall , there is one like minded guy ie(1) , so he will handshake with him)
// therefore totalHandShake = 1

// ✅ fifth guest : 1
// (at this moment, fifth guest will see in gathering hall, there are two like minded guys ie(1,1) , so he will handshake with them)
// therefore totalHandShake = 1(last handshake between 1a-1b ) + 2(current handshake between 1a-1c, 1b-1c) = 3

// ✅ sixth guest : 3
// (at this moment, sixth guest will see in gathering hall, there is one like minded guy ie(3) , so he will handshake with him)
// therefore totalHandShake = 3(last handshake) + 1(3a-3b) = 4

// Here, in code we can imagine

// given array as guest list.
// Hashmap as gathering hall
// ans as totalHandshakes.

function numIdenticalPairs(nums) {
    let count = 0;
    for (let index = 0; index < nums.length; index++) {
        for (let j = index + 1; j < nums.length; j++) {
            if(nums[index] === nums[j]){
                count++;
            }

        }
     
    }
    return count;
}

const nums = [1,2,3,1,1,3];
// console.log(numIdenticalPairs(nums));

// 7. How Many Numbers Are Smaller Than the Current Number
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

 

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
function smallerNumberThanCurrent(nums){
    let result = [];
    
    for (let index = 0; index < nums.length; index++) {
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            if(nums[j] < nums[index] && j != index){
                counter++;
            }
        }
        result.push(counter)
    }
    return result;
}
const arr = [8,1,2,2,3];
console.log(smallerNumberThanCurrent(arr)) // expected Output: [4,0,1,1,3]
