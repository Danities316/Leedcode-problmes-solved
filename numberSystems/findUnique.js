function findUnique(n) {
    let unique = 0

    for(let i of n){
        unique ^= i
    }
    return unique   
}
let n = [2,3,3,4,2,6,4]
console.log(findUnique(n))
// stop 1:54