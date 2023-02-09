// Implementation of the merge sort algorithm is a three-step procedure. 
// Divide, conquer, and combine.

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

//Kunal pattern
var mergeSort2 = function (arr) {
    if(arr.length < 2){
        return arr
    }
    let middle = Math.floor(arr.length / 2)

    let leftSide = mergeSort2(arr.slice(0, middle))
    let rightSide =mergeSort2(arr.slice(middle, arr.length))

    return merge(leftSide, rightSide)
    
}

var merge2 = function (leftSide, rightSide) {

   let lengthSum = leftSide.length + rightSide.length;

   let i = 0;
   let j = 0;
   let k = 0

   while(i < leftSide.length && j < rightSide.length){
    if(leftSide[i] < rightSide[j]){
        lengthSum[k] = leftSide[i]
        i++
    }else{
        lengthSum[k] = rightSide[j]
        j++
    }
    k++
   }
   // if leftside arr content is more than the rightside spilled the remaining array to the end
   while(i < leftSide.length){
    lengthSum[k] = leftSide[i]
    i++
    k++
   }
   while(j < righ4.length){
    lengthSum[k] = rightSide[i]
    j++
    k++
   }
   return lengthSum
}
console.log(mergeSort2([5,3,8,10,4,1]))