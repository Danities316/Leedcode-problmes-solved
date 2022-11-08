// https://leetcode.com/problems/happy-number/

var isHappy = function(n) {
    //using linkedlist 2 pointer algorithms
    let fast = n;
    let slow = n

    do{
        slow = findSqrt(slow);
        fast = findSqrt(fast)
        fast = findSqrt(fast)

          if(slow === 1 || fast === 1){
        return true
    }
    }while(slow != fast)
  
    return false
};

var findSqrt = function(digits){
 let ans = 0
 while(digits){
     let reminder = digits % 10
     ans += (reminder * reminder)
     digits = Math.floor(digits / 10)
 }
 return ans
}