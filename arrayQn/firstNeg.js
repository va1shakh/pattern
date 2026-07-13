//find first negative number from the array
function firstNegative(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            return arr[i];
        }
    }
    return null;
}

const result = firstNegative([4, 8, -2, 5, -9]);
console.log(result);