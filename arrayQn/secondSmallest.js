//find second smallest number from the array by using one loop
function secondSmall(arr){
    let small = arr[0];
    let secondSmall = Infinity;
    for(let i=1; i<arr.length; i++){
        if(arr[i] < small){
            secondSmall = small;
            small = arr[i];
        }
        else if(arr[i] < secondSmall && arr[i] !== small){
            secondSmall = arr[i];
        }
    }
    return secondSmall;
}

const result = secondSmall([4, 4, 7]);
console.log(result);