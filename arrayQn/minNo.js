//find minimum number from the string
function minNo(arr){
    let min = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] <= min){
            min = arr[i];
        }
    }
    return min;
}

const result = minNo([20, 34, 2, 100]);
console.log(result);