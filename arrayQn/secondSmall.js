//find second smallest number in the array (used two loops)
function secondSmall(arr){
    let small = arr[0];
    let secondSmall = Infinity;
    for(let i=1; i<arr.length; i++){
        if(small > arr[i]){
            small = arr[i];
        }
    }
    for(let i=1; i<arr.length; i++){
        if(secondSmall > arr[i] && arr[i] !== small){
            secondSmall = arr[i];
        }
    }
    return secondSmall;
}

const result = secondSmall([8, 3, 15, 4, 8]);
console.log(result);