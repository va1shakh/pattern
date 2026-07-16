function funName(arr){
    return arr
    .filter((element) => {
        return element.price >= 500;
    })
    .map((element) => {
        return element.name;
    });
}

const result = funName([
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 400 },
    { name: "Tablet", price: 300 },
    { name: "Monitor", price: 600 }
]);
console.log(result);