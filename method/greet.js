function makeGreet(arr){
    return arr
    .map((element) => {
        return "Hello " + element;
    });
}

const result = makeGreet(["John", "Alice", "Bob"]);
console.log(result);