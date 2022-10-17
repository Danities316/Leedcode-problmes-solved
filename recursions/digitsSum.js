const digitSum = (n) => {
    if(n == 0){
        return 0
    }
    let reminder = n % 10
    let div = Math.round(n / 10)
    return reminder + digitSum(div)
}
console.log(digitSum(1342))