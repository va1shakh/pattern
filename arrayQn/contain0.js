//check whether the array contains zero
function contains0(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i] === 0){
            return true;
        }
    }
    return false;
}

const result = contains0([3,6,34,4,10]);
console.log(result);