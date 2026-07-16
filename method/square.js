//square every number from the array
function toSquare(arr){
    return arr
    .map((element) => {
        return element * element;
    });
}

const result = toSquare([2, 3, 4, 5]);
console.log(result);