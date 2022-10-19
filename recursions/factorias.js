const factorials = (n) => {
    if(n <= 1){
        return 1
    }
  return  n * factorials(n - 1)
}
console.log(factorials(5))

//sum of numbers
const sum = (n) => {
  if(n <= 1){
    return 1
  }
  return n + sum(n - 1)
}
console.log(sum(15))
//Patterns - factorial of n is n * factorials(n - 1)