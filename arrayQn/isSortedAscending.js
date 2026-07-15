//check whether the array elements sorted in the ASC order
function isSortedAscending(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[i + 1]){
            return false;
        }
    }
    return true;
}

const result = isSortedAscending([3, 5, 6, 10]);
console.log(result);