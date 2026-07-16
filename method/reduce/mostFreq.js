//find repeated fruits
function repeatedFruit(arr){
    let large = -Infinity;
    let mostFruit;
    const freq = arr.reduce((acc, element) => {
        if(acc[element] === undefined){
            acc[element] = 1;
        }
        else{
            acc[element] += 1;
        }
        return acc;
    }, {});
    for(let key in freq){
        if(freq[key] > large){
            large = freq[key];
            mostFruit = key;
        }
    }
    return mostFruit;
}

const result = repeatedFruit([
    "apple",
    "banana",
    "apple",
    "kiwi",
    "banana",
    "apple"
]);
console.log(result);