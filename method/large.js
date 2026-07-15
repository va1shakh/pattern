//find large number from the array by using forEach method
function findLarge(arr){
    let large = -Infinity;
    arr.forEach(no => {
        if(no > large){
            large = no;
        }
    });
    return large;
}

const result = findLarge([8, 3, 15, 4, 7]);
console.log(result);