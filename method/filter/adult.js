//keep only adults
function keepAdult(arr){
    return arr
    .filter((element) => {
        return element.age >= 18;
    });
}

const result = keepAdult([
    { name: "John", age: 20 },
    { name: "Alice", age: 16 },
    { name: "Bob", age: 25 },
    { name: "Sam", age: 14 }
]);
console.log(result);