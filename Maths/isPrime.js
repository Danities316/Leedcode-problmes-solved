var isPrime = function(num){
    if(num <= 1){
        return false
    }
    let start = 2
    while(start * start <= num){
        if(num % start == 0){
            return false
        }
        start++
    }
    return true
}

var test = function(n){
    for (let i = 1; i <= n; i++) {
        console.log(i + " " + isPrime(i))
        
    }
}

// test(20)

var checkPrime = function(num){
    if(num <= 1){
        return "is not prime"
    }else{
        for (let i = 2; i <= num; i++) {
            if(num[i] % 1 == num[i] && num[i] % num[i] == 1){
                return `${num[i]} is a prime number`
            }
            
        }
    }
    return -1
}
console.log(checkPrime(40))
