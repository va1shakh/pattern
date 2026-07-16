function sum(arr){
    return arr
    .reduce((acc, element) => {
        return acc + element;
    }, 0);
}

const result = sum([5, 10, 15]);
console.log(result);