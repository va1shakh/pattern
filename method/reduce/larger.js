function findLarger(arr){
    return arr
    .reduce((acc, element) => {
        if(element > acc){
            acc = element;
        }
        return acc;
    }, -Infinity)
}

const result = findLarger([8, 3, 15, 4, 7]);
console.log(result);