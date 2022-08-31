var countNegatives = function(grid) {
 let colLength = grid[0].length;
 let rowLength = grid.length;
 let result = 0;
 let rowBound = rowLength - 1;
 let colBound = colLength - 1;
 //Starting from the last row and last col
 while(rowBound >= 0 && colBound >=  0){
    let moveUp = false;
    if(grid[rowBound][colBound] < 0){
        result++;
        colBound--;
    }else{
        //when you encounter -1 in the element move up one row
        moveUp = true
    }
    // if you reach left column boundary or moveUp flag true then move one row up and column to last column.
    if(colBound < 0 || moveUp === true){
        colBound = colLength -1;
        rowBound--;
    }
 }
   return result
};

let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
console.log(countNegatives(grid))