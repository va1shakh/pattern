//make names only
function toName(arr){
    return arr
    .map((element) => {
        return element.name;
    });
}

const result = toName([
    { name: "John", age: 20 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 18 }
]);
console.log(result);