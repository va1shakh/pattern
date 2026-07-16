function repeatedFruit(arr){
    let large = 0;
    let repeatFruit;
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
            repeatFruit = key;
        }
    }
    return repeatFruit;
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