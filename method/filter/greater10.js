//filter numbers greater than 10 from the array
function greater10(arr){
    return arr
    .filter((element) => {
        return element > 10;
    });
}

const result = greater10([5, 12, 8, 20, 3, 15]);
console.log(result);