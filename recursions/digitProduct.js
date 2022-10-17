const digitProduct = (n) => {
    if(n%10 == n){
        return n
    }
    let reminder = n % 10
    let div = Math.round(n / 10)
    return reminder * digitProduct(div)
}
console.log(digitProduct(1342))