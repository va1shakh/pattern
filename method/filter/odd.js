//filter odd numbers from the array
function filterOdd(arr){
    return arr
    .filter((element) => {
        return !(element % 2 === 0);
    });
}

const result = filterOdd([1, 2, 3, 4, 5, 6, 7]);
console.log(result);