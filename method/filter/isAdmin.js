function isAdmin(arr){
    return arr
    .filter((element) => {
        return element.role === "admin";
    });
}

const result = isAdmin([
    { name: "John", role: "admin" },
    { name: "Alice", role: "user" },
    { name: "Bob", role: "admin" },
    { name: "Sam", role: "user" }
]);
console.log(result);