let sum = 0
function reverseDigit(n) {
if(n == 0){
    return
}
let rem = n % 10
sum = sum * 10 + rem
let div = Math.round(n/10)
console.log(div)
reverseDigit(div)
}
console.log(reverseDigit(1234))