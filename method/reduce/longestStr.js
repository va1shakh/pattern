//find longest string using reduce() method
function longestStr(arr){
    return arr
    .reduce((acc, element) => {
        if(element.length > acc.length){
            acc = element;
        }
        return acc;
    });
}

const result = longestStr(["apple", "banana", "kiwi", "watermelon", "grape"]);
console.log(result);