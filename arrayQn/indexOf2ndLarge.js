//find index of second largest number in the array
function indexOf2ndLarge(arr){
    let large = arr[0];
    let secondLarge = -Infinity;
    let index = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i] > large){
            secondLarge = large;
            index = 0;
            large = arr[i];
        }
        else if(arr[i] > secondLarge && arr[i] !== large){
            secondLarge = arr[i];
            index = i;
        }
    }
    return index;
}

const result = indexOf2ndLarge([8, 13, 15, 14, 7]);
console.log(result);