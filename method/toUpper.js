//convert all fruits names to upper case
function toUpper(arr){
    return arr
    .map((element) => {
        return element.toUpperCase();
    });
}

const result = toUpper(["apple", "banana", "grape"]);
console.log(result);