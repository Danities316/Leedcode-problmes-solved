// https://www.geeksforgeeks.org/find-nth-magic-number/
function magicNum(n) {
    let ans = 0
    let base = 5

    while(n > 0){
        let last = n & 1;
        n = n >> 1;
        ans += last * base;
        base = base * 5;
    }

    return ans
}
console.log(magicNum(1))

// leedcode_questions_link: https://leetcode.com/problems/nth-magical-number/