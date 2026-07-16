function greater400stock(arr){
    return arr
    .filter((element) => {
        return element.price >= 400 && element.inStock === true;
    });
}

const result = greater400stock([
    { name: "Laptop", price: 800, inStock: true },
    { name: "Phone", price: 400, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
    { name: "Monitor", price: 500, inStock: true }
]);
console.log(result);