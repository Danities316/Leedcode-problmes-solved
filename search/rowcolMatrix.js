function rowColMatrix(matrix, target){
    let row = 0
    let col = matrix.length - 1;

    while(row < matrix.length && col >= 0){
        if(matrix[row][col] == target){
            return [row, col];
        } if(matrix[row][col] < target){
            row++
        }else{
            col--
        }
    }
    return [-1, -1];
}
let matrix = [
    [10,20,30,40],
    [15,25,35,45],
    [28,29,32,49],
    [33,44,38,50]
]
let target = 39;

console.log(rowColMatrix(matrix, target))