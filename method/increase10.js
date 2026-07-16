//increase 10% salary of each person
function increase10(arr){
    return arr
    .map((element) => {
        return {
            name: element.name,
            salary: element.salary + (element.salary * 10/100)
        };
    });
}

const result = increase10([
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 2000 },
    { name: "Bob", salary: 1500 }
]);
console.log(result);