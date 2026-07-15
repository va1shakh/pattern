//find index of largest number from the array
function largerIndex(arr){
    let larger = -Infinity;
    let largerIndex;
    arr.forEach((element, index) => {
        if(element > larger){
            larger = element;
            largerIndex = index;
        }
    });
    return largerIndex;
}

const result = largerIndex([8, 3, 15, 4, 7]);
console.log(result);