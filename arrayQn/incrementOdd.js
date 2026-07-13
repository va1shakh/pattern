//increment odd number from the array
function incrementOdd(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 1){
            newArr[newArr.length] = arr[i] + 1;
        }
        else
            newArr[newArr.length] = arr[i];
    }
    return newArr;
}

const result = incrementOdd([1,2,3,4,5]);
console.log(result);