function isAdult(arr){
    return arr
    .map((element) => {
        return{
            name: element.name,
            isAdult: element.age >= 18
        };
    });
}

const result = isAdult([
    { name: "John", age: 20 },
    { name: "Alice", age: 16 },
    { name: "Bob", age: 18 }
]);
console.log(result);