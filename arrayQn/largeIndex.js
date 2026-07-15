//find index of largest number in the array
function largeIndex(arr){
    let large = arr[0];
    let largeIndex = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i] > large){
            large = arr[i];
            largeIndex = i;
        }
    }
    return largeIndex;
}

const result = largeIndex([8, 3, 15, 4, 7]);
console.log(result);