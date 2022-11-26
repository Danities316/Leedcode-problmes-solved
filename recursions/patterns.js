var triangle = function (row, col) {
    if(row == 0){
        return
    }
    if(col < row){
        console.log("*")
        triangle(row, col + 1)
    }else{
        console.log("\n")
        triangle(row - 1, 0)
    }
}
triangle(4, 0)
//output
// * * * * *
// * * * *
// * * *
// * *
// *