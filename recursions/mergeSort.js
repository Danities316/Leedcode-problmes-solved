var mergeSort = function (arr) {
    if(arr.length < 2){
        return arr
    }

    let middle = Math.floor(arr.length / 2)
    let leftSide = arr.slice(0, middle)
    let rightSide = arr.slice(middle, arr.length)

    return merge(mergeSort(leftSide), mergeSort(rightSide))
    
}

var merge = function (leftSide, rightSide) {
    //creating a new arr
   let newArr = []

   while(leftSide.length && rightSide.length){
    //checking if the single arrays are greater  than each other
    if(leftSide[0] <= rightSide[0]){
        //push the lowest number to the first postion
        newArr.push(leftSide.shift())
    }else{
        newArr.push(rightSide.shift())
    }
   }
   //if on the left side they are more element than the righside
   while(leftSide.length){
    //push all the left over into the newArr bcos it is assume they are greater
    newArr.push(leftSide.shift())
   }

      //if on the right side they are more element than the leftside
    while(rightSide.length){
        newArr.push(rightSide.shift())
    }
    return newArr
}
console.log(mergeSort([5,3,8,10,4,1]))