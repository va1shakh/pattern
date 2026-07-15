//how many numbers greater than the average
function greaterThanAvg(arr){
    let sum = 0;
    let count = 0;
    let avg;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > avg){
            count ++;
        }
    }
    return count;
}

const result = greaterThanAvg([2, 4, 6, 8]);
console.log(result);