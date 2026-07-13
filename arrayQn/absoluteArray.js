function absoluteArr(arr){
    let absoluteArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= 0){
            absoluteArr[absoluteArr.length] = arr[i];
        }
        else
            absoluteArr[absoluteArr.length] = arr[i] * -1;
    }
    return absoluteArr;
}

const result = absoluteArr([-3, -4, 0, 6]);
console.log(result);