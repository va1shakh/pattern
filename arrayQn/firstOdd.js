function firstOdd(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 1){
            return arr[i];
        }
    }
    return null;
}

const result = firstOdd([2, 9, 7, 0]);
console.log(result);