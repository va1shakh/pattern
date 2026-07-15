//find the second largest number
function secondLarge(arr){
    let larger = arr[0];
    let secondLarge = -Infinity;
    for(let i=1; i<arr.length; i++){
        if(arr[i] > larger){
            secondLarge = larger
            larger = arr[i];
        }
        else if(arr[i] > secondLarge && arr[i] !== larger){
            secondLarge = arr[i];
        }
    }
    return secondLarge;
}

const result = secondLarge([8, 13, 15, 15, 7]);
console.log(result);