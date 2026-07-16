//filter even numbers from the array
function filterEven(arr){
    return arr
    .filter((elements) => {
        return elements % 2 === 0;
    });
}

const result = filterEven([1, 2, 3, 4, 5, 6]);
console.log(result);