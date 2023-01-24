// let count = 0

// function increamentCounter() {
//     count += 1
//     renderState()
// }
// function renderState() {
//     console.log(`My current state is that iam ${count}.... state`)
// }

// setInterval(() => {
//     increamentCounter()
// }, 1000)

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] + nums[i + 1] == target){
            return [i, i + 1]
        }
        else{
            return 0
        }
    }
};

let nums = [3,2,4]
let target = 6
// console.log(twoSum(nums, target))

var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    let obj = {
        "type" : 0,
        "color": 1,
        "name" : 2
    }
   for( let item of items){
    let value = item[obj[ruleKey]]
    if(value == ruleValue){
        count++
    }

   }
    return count
};

let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
let  ruleKey = "type"
let ruleValue = "phone"

console.log(countMatches(items, ruleKey, ruleValue))