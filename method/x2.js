//transform array element 2x
function x2(arr){
    let newArr = arr.map((element) => {
        return element * 2;
    });
    return newArr;
}

const result = x2([1, 2, 3, 4]);
console.log(result);