//give negation to array elements
function negateArr(arr){
    let negateArr = [];
    for(let i=0; i<arr.length; i++){
        negateArr[negateArr.length] = arr[i] * -1;
    }
    return negateArr;
}

const result = negateArr([4,-6, 2, -4, 0]);
console.log(result);