//count even numbers from the array
function countEven(arr){
    let count = 0;
    arr.forEach(element => {
        if(element % 2 === 0){
            count ++;
        }
    });
    return count;
}

const result = countEven([1, 2, 3, 4, 5, 6, 8]);
console.log(result);