//add 1 to all elements in the array
function add1(arr){
    let add1 = arr
    .map((no) => {
        return no + 1;
    });
    return add1;
}

const result = add1([5, 10, 15]);
console.log(result);