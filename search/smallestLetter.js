// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
// 2. 744. Find Smallest Letter Greater Than Target
function smallestLetter(letter, target){
    let start = 0;
    let end = letters.length - 1;
    if(target > end){
        return -1;
    }
// return the index: greates smallest number than or equals to target 
    while (start <= end){
       let mid = Math.trunc(start + (end - start) / 2);
    //    console.log(mid);
       if(target > letters[mid]){
           end = mid - 1;
       }else{
           start = mid + 1;
       }
    }
    return console.log(letters[start % letters.length]);
}

const letters = ["c","f","j"], target = "a"

smallestLetter(letters, target)

// stop: 1:09