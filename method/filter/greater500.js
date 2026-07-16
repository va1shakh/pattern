function greater500(arr){
    return arr
    .filter((element) => {
        return element.price >= 500;
    });
}

const result = greater500([
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 400 },
    { name: "Tablet", price: 300 },
    { name: "Monitor", price: 600 }
]);
console.log(result);