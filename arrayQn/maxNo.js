//find maximum number from the array
function maxNo(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= max){
            max = arr[i];
        }
    }
    return max;
}

const result = maxNo([3, 0, 10, -100]);
console.log(result);