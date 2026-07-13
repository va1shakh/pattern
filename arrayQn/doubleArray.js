//2x the array elements
function doubleArray(arr){
    let doubleArr = [];
    for(let i=0; i<arr.length; i++){
        doubleArr[doubleArr.length] = arr[i] * 2;
    }
    return doubleArr;
}

const result = doubleArray([1,2,3,4]);
console.log(result);