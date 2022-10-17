// Printing 5 to one in recursion 
const func = (n)  => {
    if(n == 0){
        return 
    }
    console.log(n)
    func(n - 1)
}
// func(5)

// Printing 1 to 5 in recursion 
const funcRev = (n)  => {
    if(n == 0){
        return 
    }
    funcRev(n - 1)
    console.log(n)
}
// funcRev(5)

// Printing 1 to 5 in recursion 
const funcBoth = (n)  => {
    if(n == 0){
        return 
    }
   
    console.log(n)
    funcBoth(n - 1)
    console.log(n)
}
funcBoth(5)


