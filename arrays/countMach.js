/** 
Question : 1773. Count Items Matching a Rule
question link: shorturl.at/egx05
*/

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