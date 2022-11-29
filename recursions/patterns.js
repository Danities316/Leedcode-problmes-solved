var triangle = function (row, col, straem = "") {
    if(row == 0){
        return
    }
    if(col < row){
        straem += "*"
        triangle(row, col + 1, straem)
    }else{
        console.log(straem)
        straem = ""
        triangle(row - 1, 0, straem)
    }
}
triangle(4, 0)
//output
// * * * * *
// * * * *
// * * *
// * *
// *