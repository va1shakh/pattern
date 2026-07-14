//sum of positive integers from the array
function sumPositive(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            sum = sum + arr[i];
        }
    }
    return sum;
}

const result = sumPositive([-3, 8, 9, -4]);
console.log(result);