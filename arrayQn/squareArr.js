//square array elements
function squareArr(arr){
    let squareArr = [];
    for(let i=0; i<arr.length; i++){
        squareArr[squareArr.length] = arr[i] * arr[i];
    }
    return squareArr;
}

const result = squareArr([1,2,3,4]);
console.log(result);