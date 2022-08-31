// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    // Compare array[j] with array[r], for j = p, p+1,...r-1
    // maintaining that:
    //  array[p..q-1] are values known to be <= to array[r]
    //  array[q..j-1] are values known to be > array[r]
    //  array[j..r-1] haven't been compared with array[r]
    // If array[j] > array[r], just increment j.
    // If array[j] <= array[r], swap array[j] with array[q],
    //   increment q, and increment j. 
    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.
    // declaring q as the pivot
    var q = p;
    //iterating through [p..r] where p is start and r is end using j as the index and starting at p
    for(var j = p; j < r; j++){
        // if the element index of the array at element j(start) is less than the the index at r(end) 
        if(array[j] <= array[r]){
            //swap index in  j  with index in q(remember q is p
            swap(array, j, q);
            //And increament, meaning move to the next index
            q++;
            console.log(array)
        }
    }
    //else swap element index in r wth element index in q
    swap(array, r, q);
    //return the index of q
    return q;
}

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length-1);
console.log("Array after partitioning: " + array);
