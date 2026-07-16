function greater4(arr){
    return arr
    .filter((element) => {
        return element.length > 4;
    });
}

const result = greater4(["John", "Alice", "Bob", "Christopher", "Sam"]);
console.log(result);