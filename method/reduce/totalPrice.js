function totalPrice(arr){
    return arr
    .reduce((acc, element) => {
        return acc + element.price;
    }, 0);
}

const result = totalPrice([
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 400 },
    { name: "Tablet", price: 300 }
]);
console.log(result);