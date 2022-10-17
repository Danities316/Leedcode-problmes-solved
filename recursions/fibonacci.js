const fibo = (n) => {
// base case
if(n < 2){
    return n
}
//Dividing the problems into sub problems
return fibo(n - 1) + fibo(n - 2)

}
console.log(fibo(7))