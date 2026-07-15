//find smallest number from the array by using forEach method
function findLarge(arr){
    let small = Infinity;
    arr.forEach(no => {
        if(no < small){
            small = no;
        }
    });
    return small;
}

const result = findLarge([8, 3, 15, 4, 7]);
console.log(result);