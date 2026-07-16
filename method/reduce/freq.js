//count frequency of each number by using reduce method
function countFreq(arr){
    return arr
    .reduce((acc, element) => {
        if(acc[element] === undefined){
             acc[element] = 1;
        }
        else{
             acc[element] += 1;
        }
        return acc;
    }, {});
}

const result = countFreq([1, 2, 1, 3, 2, 1]);
console.log(result);