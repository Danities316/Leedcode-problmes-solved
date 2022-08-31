function sortedMatrix(matrix, target){
    let row = matrix.length;
    let col = matrix[0].length;

    if(row == 1){
        return binarySearch(matrix, 0, 0, col-1, target)
    }

    let rowStart = 0;
    let rowEnd = row-1;
    let cMid = col / 2;
    while(rowStart < (rowEnd - 1)){
        let mid = Math.floor( (rowStart + rowEnd) / 2);
        if(matrix[mid][cMid] == target){
            return [mid, cMid];
        } if(matrix[mid][cMid] < target){
            rowStart = mid
        }else{
            rowEnd = mid

        }
    }

    // now we have two rows
    if(matrix[rowStart][cMid] == target){
        return  [rowStart, cMid];
    }
    if(matrix[rowStart + 1][cMid] == target){
        return [rowStart + 1, cMid]
    }
    //search in 1st half
    if(target <= matrix[rowStart][cMid - 1]){
        return binarySearch(matrix, rowStart, 0, cMid - 1, target)
    }
    //search in 2nd half
    if(target >= matrix[rowStart][cMid + 1] && target <= matrix[rowStart][col - 1] ){
        return binarySearch(matrix, rowStart, cMid + 1, col - 1, target)
    }
    //search in 3rd half
    if(target <= matrix[rowStart + 1][cMid - 1]){
        return binarySearch(matrix, rowStart + 1, 0, cMid - 1, target)
    }
    //search in 4th half
    else{
        return binarySearch(matrix, rowStart + 1, cMid + 1, col - 1, target)
    }

    // return [-1, -1]
}

function binarySearch(matrix, row, cStart, cEnd, target){
    while(cStart <= cEnd){
        mid = Math.floor( (cStart + cEnd) / 2);
        if(matrix[row][mid] == target){
            return [row, mid];
        }if(matrix[row][mid] < target){
            cStart = mid + 1
        }else{
            cEnd =  mid - 1;

        }
    }
    return [-1, -1]
}

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
target = 5;
console.log(sortedMatrix(matrix, target))