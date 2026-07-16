function toFullName(arr){
    return arr
    .map((element) => {
        return element.firstName +' '+ element.lastName;
    });
}

const result = toFullName([
    { firstName: "John", lastName: "Doe" },
    { firstName: "Alice", lastName: "Smith" },
    { firstName: "Bob", lastName: "Brown" }
]);
console.log(result);