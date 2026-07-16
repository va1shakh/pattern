function greater400(arr){
    return arr
    .filter((element) => {
        return element.price >= 400;
    });
}

const result = greater400([
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 400 },
    { name: "Tablet", price: 300 },
    { name: "Monitor", price: 200 }
]);
console.log(result);